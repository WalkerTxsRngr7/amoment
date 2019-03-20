var moment = require('moment');
const chalk = require('chalk');
console.log(chalk.magenta(chalk.underline(moment().format("dddd"))));
hour = moment().format("k");
if (hour > 12 && hour < 17){
    greeting = "Good afternoon";
} else if (hour >= 00 && hour <= 12){
    greeting = "Good morning.";
} else if (hour >= 17){
    greeting = "Good evening.";
}
console.log(chalk.red(chalk.underline(greeting)));