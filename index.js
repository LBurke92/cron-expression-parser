const {parseCronMinutes, parseCronHours, parseCronMonthDays, parseCronMonths, parseCronWeekDays} = require('./helpers')

// Capture first argument passed with call
const [node, filePath, arg] = process.argv

console.log("arg", `${arg}`)

// Should add in some check to verify that the arg is a cron string
// Either run the CRON_REGEX or cronChecker, but neither of them work right now
// But if found I would then respond kindly with some kind of error message


// Destructures arguments by spaces to assign them to new variables
const [cronMinutes, cronHours, cronMonthDays, cronMonths, cronWeekDays, command] = arg.split(" ")

// Add functions which do the calculation for each field covering what can be displayed
const parsedMinutes = parseCronMinutes(cronMinutes);
const parsedHours = parseCronHours(cronHours);
const parsedMonthDays = parseCronMonthDays(cronMonthDays);
const parsedMonths = parseCronMonths(cronMonths);
const parsedWeekDays = parseCronWeekDays(cronWeekDays);

// Creates array for the output so it can be looped and logged
const output = [
  "minute".padEnd(14) + parsedMinutes,
  "hour".padEnd(14) + parsedHours,
  "day of month".padEnd(14) + parsedMonthDays,
  "month".padEnd(14) + parsedMonths,
  "day of week".padEnd(14) + parsedWeekDays,
  "command".padEnd(14) + command
]

output.forEach((line) => {
  console.log(line)
})

