const ora = require('ora');

async function loading(msg, fn, ...res) {
  const spinner = ora(msg);
  spinner.color = 'blue';
}

module.exports = {
  loading
};
