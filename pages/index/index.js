//index.js
//获取应用实例
const app = getApp()
const apiService = require('../../utils/apiService')
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    DotStyle: true,
    cardCur: 0,
    indicatorDots: true,
    indicatorActiveColor: '#1296db',
    indicatorColor: '#e6e6e6',
    autoplay: true,
    interval: 5000,
    duration: 1000,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    category: [],
    images: [],
    results: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
    //今日资源api
    wx.showLoading()
    apiService.oneDayData('2019/01/03').then(function(res) {
      console.log(res)
      wx.hideLoading()
      if (!res.error) {
        that.setData({
          category: res.category,
          results: res.results,
          android: res.results.Android,
          images: res.results.福利
        })
      } else {
        console.log('请求错误')
      }
    }).catch(function(e) {
      wx.hideLoading()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  //item 图片
  onTabsItemTap: function(event) {
    wx.previewImage({
      current: event.currentTarget.dataset.gid[0], // 当前显示图片的http链接
      urls: event.currentTarget.dataset.gid // 需要预览的图片http链接列表
    })
  },
  //banner大图 
  onBannerItemTap: function(event) {
    let index = event.currentTarget.id;
    let urls = this.data.images.map(function(item) {
      return item.url;
    });
    wx.previewImage({
      current: urls[index], // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  },
  //跳转详情页
  onItemClick: function(event) {
    console.log("跳转前详情页数据:" + data)
    let data = encodeURIComponent(JSON.stringify(event.currentTarget.dataset.gid))
    let url = '../webview/webView?data=' + data
    wx.navigateTo({
      url: url
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

})