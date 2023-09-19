/**
 * In general, all times of the week are scaled to be between 0 (midnight beginning Sun) to 168 (midnight ending Sat).
 * When a sleep interval is referenced, it will always be referenced with respect to the sleep start time; therefore
 * the first 4 hours are assumed to be asleep and the following 10 hours are awake.
 */
export const TimeManager = {
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  offsetList: [...Array(27).keys()].map(n => n - 12)
    .concat([-9.5, -3.5, 3.5, 4.5, 5.5, 5.75, 6.5, 8.75, 9.5, 10.5, 12.75])
    .sort((a, b) => a - b),
  // Arbitrary time (near time of implementation) which has 0 "week time"
  zeroWeekReference: 1694944800000,

  // Date.getTimezoneOffset() returns a value in minutes to UTC (eg. in UTC-5 it returns 300). This function returns
  // the UTC offset in hours (eg. UTC-5 returns -5)
  get localTimeZone() {
    return -new Date().getTimezoneOffset() / 60;
  },

  // Returns the number of hours from "time 0" from which the first sleep interval starts. Can be negative.
  get localSleepOffset() {
    // The other numbers are due to the sleep pattern "starting" at 8 AM on Sunday in UTC-5
    return (this.localTimeZone + 5) + 8;
  },
  
  // Returns the current time of the week, in the local time zone
  get currentTime() {
    const now = new Date();
    return (now.getSeconds() / 60 + now.getMinutes()) / 60 + now.getHours() + now.getDay() * 24;
  },

  // Returns an array of starting sleep times which have some part within the 0-168 time
  get sleepTimes() {
    // Sleep occurs 12 times per week, but this is padded by 2 on each side to account for very far away time zones
    return [...Array(16).keys()]
      .map(n => 14 * (n - 2) + this.localSleepOffset)
      .filter(n => n >= -4 && n <= 168);
  },

  get hasTestTime() {
    return this.testTime !== undefined && this.testZone !== undefined;
  },

  // Returns a difference in time (in hours) between the test time and right now (positive = test is in the future)
  get testTimePresentOffset() {
    if (!this.hasTestTime) return 0;
    const diffMs = (this.testTime - 3600000 * this.testZone) - (Date.now() - 3600000 * this.localTimeZone);
    return diffMs / 3600000;
  },

  // Given a time in the local time zone, find what 0-168 time it would've corresponded to
  get testDataWeekTime() {
    if (!this.hasTestTime) return 0;
    const weekLength = 1000 * 3600 * 168;
    const testTimeAdj = this.testTime - 3600000 * this.testZone - this.zeroWeekReference;
    const thisWeekMs = ((testTimeAdj % weekLength) + weekLength) % weekLength;
    return 168 * (thisWeekMs / weekLength);
  },

  get testTimeData() {
    const data = this.fullSleepData(this.testDataWeekTime);
    if (this.testTime < 1649048400000) data.extra = "I was not doing this sleep pattern this long ago.";
    if (this.testTime > 1709272800000) data.extra = "I will likely not be sleeping like this that far in the future.";
    return data;
  },
  
  // Returns a string representing the time of week in a more human-readable format (Day HH:MM AM/PM)
  toDateTimeString(time) {
    let timeMin = Math.round(10080 * (time / 168));
    const DHMSArray = [];
    const factors = [60, 24, 7];
    for (const factor of factors) {
      const next = timeMin % factor;
      timeMin = Math.floor(timeMin / factor);
      DHMSArray.push(next);
    }
    DHMSArray.reverse();

    // Special parsing for 12:XX
    const meridian = DHMSArray[1] >= 12 ? "PM" : "AM";
    DHMSArray[1] %= 12;
    if (DHMSArray[1] === 0) DHMSArray[1] = 12;

    const padNum = num => (num < 10 ? `0${num}` : num);
    const timeStr = DHMSArray.slice(1).map(num => padNum(num)).join(":");

    // Noon and midnight are potentially ambiguous (12:00 AM/PM)
    if (timeStr === "12:00") {
      return `${this.days[DHMSArray[0]]} ${meridian === "AM" ? "just after midnight" : "at noon" }`;
    }
    return `${this.days[DHMSArray[0]]} ${timeStr} ${meridian}`;
  },

  // Takes in a number of hours, returns a "X hours, Y minutes" string
  toDurationString(hours) {
    let hr = Math.floor(hours);
    let min = Math.round((60 * hours) % 60);
    if (min === 60) {
      hr++;
      min = 0;
    }

    const quantify = (num, str) => num === 1 ? `${num} ${str}` :  `${num} ${str}s`;
    const parts = [];
    if (hr !== 0) parts.push(quantify(hr, "hour"));
    if (min !== 0) parts.push(quantify(min, "minute"));
    return parts.length === 0
      ? "less than a minute"
      : parts.join(" and ");
  },

  // Takes in a number of hours, returns an English phrase denoting the gap
  toDurationStringApprox(hours) {
    const suffix = hours > 0 ? " in the future" : " ago";
    const hr = Math.abs(hours);
    if (hr < 1 / 60) return "right now";
    if (hr < 1) return `${(60 * hr).toFixed(1)} minutes ${suffix}`;
    if (hr < 24) return `about ${hr.toFixed(1)} hours ${suffix}`;
    if (hr < 24 * 60) return `about ${(hr / 24).toFixed(1)} days ${suffix}`;
    if (hr < 24 * 365) return `about ${(hr / (24 * 7)).toFixed(1)} weeks ${suffix}`;
    return `over a year ${suffix}`;
  },

  // Adjust a decimals into HH:MM and append a + for positive offsets
  formatUTCString(offset) {
    if (offset === 0) return "UTC±0:00";
    const absNum = Math.abs(offset);
    const numStr = absNum === Math.floor(absNum)
      ? `${absNum}:00`
      : `${Math.floor(absNum)}:${60 * (absNum - Math.floor(absNum))}`;
    const signStr = offset > 0 ? "+" : "-";
    return `UTC${signStr}${numStr}`;
  },

  // Returns an object with all sleep information aggregated together
  fullSleepData(checkTime = this.currentTime) {
    // Before the first sleep time, 
    const startTimes = this.sleepTimes.filter(t => t < checkTime);
    const cycleTime = checkTime - (startTimes.length === 0
      ? this.sleepTimes[this.sleepTimes.length - 1] - 168
      : startTimes.filter(t => t < checkTime).reduce((a, b) => Math.max(a, b)));
    
    return {
      isSleeping: cycleTime <= 4,
      nextChangeIn: cycleTime <= 4 ? 4 - cycleTime : 14 - cycleTime,
      nextChangeAt: checkTime + (cycleTime <= 4 ? 4 - cycleTime : 14 - cycleTime),
    };
  },
}

export default TimeManager;
