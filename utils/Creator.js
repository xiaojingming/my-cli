const Inquirer = require("inquirer");
const util = require('util');
const ora = require('ora');
const downloadGitRepo = require('download-git-repo');
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
    loading({}, this, this.downloadGitRepo, repo, this.target);
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
