const CRON_REGEX = /^(\*|([0-5]?\d)(-[0-5]?\d)?(\/[0-5]?\d)?(,([0-5]?\d)(-[0-5]?\d)?(\/[0-5]?\d)?)*)\s+(\*|([01]?\d|2[0-3])(-([01]?\d|2[0-3]))?(\/[01]?\d|2[0-3])?(,([01]?\d|2[0-3])(-([01]?\d|2[0-3]))?(\/[01]?\d|2[0-3])?)*)\s+(\*|([1-9]|[12]\d|3[01])(-([1-9]|[12]\d|3[01]))?(\/[1-9]|[12]\d|3[01])?(,([1-9]|[12]\d|3[01])(-([1-9]|[12]\d|3[01]))?(\/[1-9]|[12]\d|3[01])?)*)\s+(\*|(0?[1-9]|1[0-2])(-0?[1-9]|1[0-2])?(\/0?[1-9]|1[0-2])?(,(0?[1-9]|1[0-2])(-0?[1-9]|1[0-2])?(\/0?[1-9]|1[0-2])?)*)\s+(\*|([0-6])(-([0-6]))?(\/[0-6])?(,([0-6])(-([0-6]))?(\/[0-6])?)*)$/;

function cronChecker(cronString) {

}

function parseCronMinutes(cronMinutes) {
  return parseCronFormater(parseCronField(cronMinutes, 0, 59))
}

function parseCronHours(cronMinutes) {
  return parseCronFormater(parseCronField(cronMinutes, 0, 23))
}

function parseCronMonthDays(cronMinutes) {
  return parseCronFormater(parseCronField(cronMinutes, 1, 31))
}

function parseCronMonths(cronMinutes) {
  return parseCronFormater(parseCronField(cronMinutes, 1, 12))
}

function parseCronWeekDays(cronMinutes) {
  return parseCronFormater(parseCronField(cronMinutes, 0, 6))
}

function parseCronField(cronField, min, max) {
  let result = [];
  
  if (cronField === "*") {
      return Array.from({ length: max - min + 1 }, (_, i) => i + min);
  }
  
  if (cronField.includes("/")) {
      let [start, step] = cronField.split("/").map(Number);
      start = isNaN(start) ? min : start;
      step = isNaN(step) ? 1 : step;
      for (let i = start; i <= max; i += step) {
          result.push(i);
      }
  } else if (cronField.includes(",")) {
      result = cronField.split(",").map(Number).filter(n => n >= min && n <= max);
  } else if (cronField.includes("-")) {
      let [start, end] = cronField.split("-").map(Number);
      for (let i = start; i <= end; i++) {
          result.push(i);
      }
  } else {
      let num = Number(cronField);
      if (!isNaN(num) && num >= min && num <= max) {
          result.push(num);
      }
  }
  
  return result.sort((a, b) => a - b);
}

function parseCronFormater(cronArray) {
  return cronArray.join(" ")
}

module.exports = { parseCronMinutes, parseCronHours, parseCronMonthDays, parseCronMonths, parseCronWeekDays }