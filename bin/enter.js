#! /usr/bin/env node
const { program } = require('commander');
const chalk = require("chalk");

program
  .name('demo')
  .usage(`<command> [option]`)
  .version('1.0.0');

program.parse(process.argv);
console.log(`hello ${chalk.blue("world")}`);
console.log(chalk.blue.bgRed.bold("Hello world!"));
console.log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);
