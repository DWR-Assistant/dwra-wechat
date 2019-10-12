//app.js
import request from 'utils/request.js'
import wxapi from 'utils/wxapi.js'

App({
  onLaunch: function () {
    var jwt = wx.getStorageSync('jwt')
    if (!jwt.access_token) {
      this.login();
    } else {
      console.log('account_id:' + jwt.account_id)
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  login: function() {
    let that = this
    console.log(wxapi)
    wxapi.login().then(res => {
      if (res.code) {
        console.log(res)
        return request.get('https://dwra-og.yunwoke.com/test')
      }
    }).then(res => {
      console.log(res)
      return request.get('https://dwra-og.yunwoke.com/version')
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  globalData: {
    userInfo: null
  }
})