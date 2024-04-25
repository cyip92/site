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
  zeroWeekReference: 1694959200000,
  // These are assigned appropriate values within TimeInput
  inputTime: 0,
  inputZone: 0,
  inputZoneIndex: 0,

  // Returns the UTC offset in hours (eg. UTC-5 returns -5)
  get localTimeZone() {
    // Note: Date.getTimezoneOffset() returns a value in minutes to UTC (eg. in UTC-5 it returns 300)
    return -new Date().getTimezoneOffset() / 60;
  },

  // Returns the number of hours from "time 0" from which the first sleep interval starts. Can be negative.
  get localSleepOffset() {
    // The numbers here are due to the sleep pattern "starting" at 8 AM on Sunday in UTC-5
    return (this.localTimeZone + 6) + 8;
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
      .filter(n => n >= -14 && n <= 182);
  },

  // Checks for whether or not the otherwise default input props have been set due to user input
  get hasInputTime() {
    return this.inputTime !== 0 && this.inputZone !== 0;
  },

  // Returns a difference in time (in hours) between the input time and right now (positive = input is in the future)
  get inputTimePresentOffset() {
    if (!this.hasInputTime) return 0;
    const diffMs = (this.inputTime - 3600000 * this.inputZone) - (Date.now() - 3600000 * this.localTimeZone);
    return diffMs / 3600000;
  },

  // Returns the time the input time corresponds to
  get inputDataWeekTime() {
    if (!this.hasInputTime) return 0;
    const weekLength = 1000 * 3600 * 168;
    const inputTimeAdj = this.inputTime - this.zeroWeekReference + 3600000 * this.inputZone;
    const thisWeekMs = ((inputTimeAdj % weekLength) + weekLength) % weekLength;
    return 168 * (thisWeekMs / weekLength);
  },

  // Returns a data object for the input time, with an additional comment if it's very far in the past/future
  get inputTimeData() {
    const data = this.fullSleepData(this.inputDataWeekTime);
    if (this.inputTime < 1649048400000) data.extra = "I was not doing this sleep pattern this long ago.";
    if (this.inputTime > 1709272800000) data.extra = "I am unlikely to be sleeping like this that far in the future.";
    return data;
  },

  // Returns an object with all sleep information aggregated together (all times are in hours)
  fullSleepData(checkTime = this.currentTime) {
    // We rely on this.sleepTimes returning a list padded with negative and too-large values here
    const startTimes = this.sleepTimes.filter(t => t < checkTime);
    const cycleTime = checkTime - startTimes.filter(t => t < checkTime).reduce((a, b) => Math.max(a, b));
    
    return {
      isSleeping: cycleTime <= 4,
      nextChangeIn: cycleTime <= 4 ? 4 - cycleTime : 14 - cycleTime,
      nextChangeAt: checkTime + (cycleTime <= 4 ? 4 - cycleTime : 14 - cycleTime),
    };
  },
  
  // Returns "Day HH:MM AM/PM"
  toDateTimeString(time) {
    // Turn the time into an array of [day_of_week, hour, minute]
    let timeMin = Math.floor(10080 * (time / 168));
    const DHMSArray = Array<number>();
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

  // Returns a "X hours, Y minutes"
  toDurationString(hours) {
    let hr = Math.floor(hours);
    let min = Math.ceil((60 * hours) % 60);
    if (min === 60) {
      hr++;
      min = 0;
    }

    const quantify = (num, str) => num === 1 ? `${num} ${str}` :  `${num} ${str}s`;
    const parts = Array<string>();
    if (hr !== 0) parts.push(quantify(hr, "hour"));
    if (min !== 0) parts.push(quantify(min, "minute"));
    return parts.length === 0
      ? "less than a minute"
      : parts.join(" and ");
  },

  // Returns an English phrase describing a relative time
  toDurationStringApprox(hours) {
    const suffix = hours > 0 ? " in the future" : " ago";
    const hr = Math.abs(hours);
    const min = Math.floor((60 * hr) % 60);
    const quantify = (num, str) => num === 1 ? `${num} ${str}` :  `${num} ${str}s`;
    if (hr < 1 / 60) return "right now";
    if (hr < 1) return `about ${quantify(min, "minute")} ${suffix}`;
    if (hr < 24) return `about ${quantify(Math.floor(hr), "hour")}, ${quantify(min, "minute")} ${suffix}`;
    if (hr < 24 * 60) {
      return `about ${quantify(Math.floor(hr / 24), "day")}, ${quantify(Math.floor(hr % 24), "hour")} ${suffix}`;
    }
    if (hr < 24 * 365) return `about ${(hr / (24 * 7)).toFixed(1)} weeks ${suffix}`;
    return `over a year ${suffix}`;
  },

  // Adjust a decimals into HH:MM and appends a + for positive offsets
  formatUTCString(offset) {
    if (offset === 0) return "UTC±0:00";
    const absNum = Math.abs(offset);
    const numStr = absNum === Math.floor(absNum)
      ? `${absNum}:00`
      : `${Math.floor(absNum)}:${60 * (absNum - Math.floor(absNum))}`;
    const signStr = offset > 0 ? "+" : "-";
    return `UTC${signStr}${numStr}`;
  },
}

export default TimeManager;
