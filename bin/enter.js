#! /usr/bin/env node
const { program } = require('commander');
// const chalk = require("chalk");
const ora = require('ora');
const Inquirer = require("inquirer");
// const figlet = require('figlet');

// figlet.text('Hello World!!', {
//   font: 'Ghost',
//   horizontalLayout: 'default',
//   verticalLayout: 'default',
//   width: 80,
//   whitespaceBreak: true
// }, function(err, data) {
//   if (err) {
//       console.log('Something went wrong...');
//       console.dir(err);
//       return;
//   }
//   console.log(data)
// });
const spinner = ora('Loading unicorns');
program
  .name('demo')
  .usage(`<command> [option]`)
  .version('1.0.0');

// program.parse(arguments)处理参数
program.parse(process.argv);
// 配置模板选项
new Inquirer.prompt([
  {
    name: 'vue',
    type: 'checkbox',
    message: 'check the features needed for your project',
    choices: [
      {
        name: 'Babel',
        checked: true,
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'Router',
      }
    ]
  }
]).then((data) => {
  // console.log(data);
  spinner.start();
  spinner.color = 'yellow';
  spinner.text = 'downloading~';
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      spinner.stop();
      resolve();
    }, 2000);
  });
}).then(() => {
  spinner.succeed('download success');
}).catch((err) => {
  spinner.fail('download fail');
});
// console.log(`hello ${chalk.blue("world")}`);
// console.log(chalk.blue.bgRed.bold("Hello world!"));
// console.log(
//   chalk.green(
//     "I am not a green line" +
//       chalk.blue.underline.bold("with a blue substring") +
//       " that becomes green again!"
//   )
// );
