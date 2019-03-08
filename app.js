//app.js
App({
  onLaunch: function() {
    wx.cloud.init({
      traceUser: true,
      env: 'gank-test-5bade0'
    }),
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
  globalData: {
    userInfo: null,
    shareTitle: '可能是最好用的gank.io客户端',
    selectDay:null
  }
})