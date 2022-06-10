const axios = require('axios');

axios.interceptors.response.use((res) => res.data);
// 获取仓库信息
async function getZhuRongRepo() {
  return axios.
  get("https://api.github.com/orgs/vue/repos");
}
// 获取版本内容
async function getTagsByRepo(repo) {
  return axios.get(`https://api.github.com/repos/vue/${repo}/tags`);
}

module.exports = {
  getZhuRongRepo,
  getTagsByRepo,
};
