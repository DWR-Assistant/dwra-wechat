import promisify from 'promisify.js';

export default {
  get: (url, data) => {
    return promisify(wx.request)({
      url: url,
      method: 'GET',
      data: data,
      header: {
        'Content-Type': 'application/json'
      }
    })
  },
  post: (url, data) => {
    return promisify(wx.request)({
      url: url,
      method: 'POST',
      data: data,
      header: {
        "content-type": "application/json",
        "token":'123'
      },
      token: '456',
    })
  }
}