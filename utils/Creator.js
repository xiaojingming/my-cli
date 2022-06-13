const Inquirer = require("inquirer");
const util = require('util');
const ora = require('ora');
const downloadGitRepo = require('download-git-repo');
const chalk = require('chalk');
const dictionary = require('./dictionary');
const { loading } = require('./util');

class Creator {
  constructor(name, target) {
    this.downloadGitRepo = util.promisify(downloadGitRepo);
    this.name = name;
    this.target = target;
  }

  async create() {
    const repo = await this.getRepoInfo();
    await loading({}, this, this.downloadGitRepo, repo, this.target);
    console.log(`\nSuccessfully created project ${this.name}`);
    console.log('\n  cd  ' + chalk.blue(this.name));
    console.log('  npm install');
    console.log('  npm run serve\n');
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
