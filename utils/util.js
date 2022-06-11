const ora = require('ora');

/**
 * 通用加载函数
 * @param {object} msg 
 * @param {string} msg.start
 * @param {string} msg.succeed
 * @param {string} msg.fail
 * @param {*} context
 * @param {*} fn 加载执行的异步函数
 * @param  {...any} res 执行异步函数需要的参数
 */
async function loading(
  {
    start = 'downloading the template, Please wait 😘😘',
    succeed = 'download compeleted!!! 🤗🤗',
    fail = 'download error! Please try again 😭😭'
  },
  context,
  fn,
  ...res
) {
  const spinner = ora(start);
  spinner.start();
  try {
    await fn.apply(context, res);
    spinner.succeed(succeed);
  } catch (error) {
    spinner.fail(fail);
  }
}

module.exports = {
  loading
};
