import promisify from 'promisify.js';

function get(url, data) {
  let getRequest = promisify(wx.request)
  return getRequest({
    url: url,
    method: 'GET',
    data: data,
    header: {
      'Content-Type': 'application/json'
    }
  })
}

/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function post(url, data) {
  let postRequest = promisify(wx.request)
  return postRequest({
    url: url,
    method: 'POST',
    data: data,
    header: {
      "content-type": "application/json"
    },
  })
}

export default {
  get: get,
  post: post
}