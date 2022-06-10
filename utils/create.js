const fs = require('fs-extra');
const path = require('path');
const Inquirer = require("inquirer");
const Creator = require('./Creator');

module.exports = async function create(projectName, { force }) {
  const cwd = process.cwd(); // 当前目录
  const filePath = path.join(cwd, projectName);
  if (fs.existsSync(filePath)) {
    if (force) {
      await fs.remove(filePath);
    } else {
      const { isOverwrite } = await new Inquirer.prompt({
        name: 'isOverwrite',
        type: 'list',
        message: 'Target Directory exists, Please choose an action',
        choices: [
          {
            name: 'Overwrite',
            value: true
          },
          {
            name: 'Cancel',
            value: false
          }
        ]
      })
      if (isOverwrite) {
        console.log('\nRemoving');
        fs.remove(filePath);
      } else {
        console.log('Cancel');
        return;
      }
    }
  }
  const cIns = new Creator(projectName, filePath);
  cIns.create();
};
