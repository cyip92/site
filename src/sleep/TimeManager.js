/**
 * In general, all times of the week are scaled to be between 0 (midnight beginning Sun) to 168 (midnight ending Sat).
 * When a sleep interval is referenced, it will always be referenced with respect to the sleep start time; therefore
 * the first 4 hours are assumed to be asleep and the following 10 hours are awake.
 */
export const TimeManager = {
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  pageInputs: {},

  // Date.getTimezoneOffset() returns a value in minutes to UTC (eg. in UTC-5 it returns 300)
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

  // Takes in a number of hours, returns an appropriately-formatted HH:MM:SS string
  toDurationString(hours) {
    const hr = Math.floor(hours);
    const min = Math.floor((60 * hours) % 60);
    const sec = Math.floor((3600 * hours) % 60);
    const padNum = num => (num < 10 ? `0${num}` : num);
    return `${padNum(hr)}:${padNum(min)}:${padNum(sec)}`;
  },

  // Returns an object with all sleep information aggregated together
  fullSleepData(checkTime = this.currentTime) {
    const cycleTime = checkTime - this.sleepTimes.filter(t => t < checkTime).reduce((a, b) => Math.max(a, b));
    
    return {
      isSleeping: cycleTime <= 4,
      nextChangeIn: cycleTime <= 4 ? 4 - cycleTime : 14 - cycleTime,
      nextChangeAt: checkTime + (cycleTime <= 4 ? 4 - cycleTime : 14 - cycleTime),
    };
  },
}
export default TimeManager;
