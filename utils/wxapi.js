import promisify from 'promisify.js';

export default {
  login: promisify(wx.login),
  getUserInfo: promisify(wx.getUserInfo)
}