const Inquirer = require("inquirer");
const util = require('util');
const ora = require('ora');
const downloadGitRepo = require('download-git-repo');
const dictionary = require('./dictionary');

class Creator {
  constructor(name, target) {
    this.downloadGitRepo = util.promisify(downloadGitRepo);
    this.name = name;
    this.target = target;
  }

  async create() {
    const repo = await this.getRepoInfo();
    const spinner = ora('downloading the template, Please wait 😘😘');
    spinner.start();
    this.downloadGitRepo(repo, this.target).then(() => {
      spinner.succeed('download compeleted!')
    }).catch(() => {
      spinner.fail('download error! Please try again')
    })
  }

  async getRepoInfo() {
    const { repo } = await new Inquirer.prompt([{
      type: 'list',
      name: 'repo',
      message: 'Please choose a template',
      choices: dictionary
    }]);
    return repo;
  }
};

module.exports = Creator;
