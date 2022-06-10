#! /usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');
// 配置create命令
program
  .command('create <project-name>')
  .description('create a new project')
  .option('-f, --force', 'overwrite the project if it exists')
  .action((projectName, cmd) => {
    require('../utils/create.js')(projectName, cmd);
  });
//配置config命令--测试
program
  .command('config [value]')
  .description('inspeact and modify the config')
  .option('-g, --get <key>', 'get the value of a key')
  .option('-s, --set <key> <value>', 'set option[key] is value')
  .option('-d, --delete <key>', 'delete option by key')
  .action((value, key) => {
    console.log(value, key);
  });

program.on('--help', () =>{
  console.log()
  console.log(
    `  Run ${chalk.blue('wowo <command> --help')} for detailed usage of given command`
  )
  console.log()
})
program
  .name('wowoja-pannel')
  .usage('<command> [option]')
  .version('1.0.0');

program.parse(process.argv);
