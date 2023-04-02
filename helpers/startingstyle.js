const PressToContinuePrompt = require('inquirer-press-to-continue');
const inquirer =  require("inquirer")
const chalk = require('chalk');


inquirer.registerPrompt('press-to-continue', PressToContinuePrompt);

async function main() {
  const boxen = await import('boxen');
 
  const message = 'Employee Tracker \nManage your employees, departments, jobs, and tasks with ease.\n';
  const options = {
    padding: 2,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'yellow',
    backgroundColor: 'red',
    textAlignment: "center"
  };
  const header = boxen.default(chalk.white.bold(message), options);

  console.log(header);
  const inq1 = await inquirer.prompt(
    {
        name: 'key',
        type: 'press-to-continue',
        enter: true,
        pressToContinueMessage: `'Press Enter key to continue...'\n`,
    });

}


module.exports = main;