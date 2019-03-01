// pages/category/category.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const app = getApp()
const apiService = require('../../utils/apiService')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    scrollLeft: 0,
    tabs: ["Android", "iOS", "前端", "App", "拓展资源", "瞎推荐"],
    results: [],
    isRefresh: false
  },

  onLoad: function() {
    this.getdata(1)
  },

  tabSelect(e) {
    console.log(e);
    let index = e.currentTarget.dataset.id;
    this.setData({
      TabCur: index,
      scrollLeft: (index - 1) * 60
    })
    this.getdata(1)
  },


  getdata: function(page) {
    let category = this.data.tabs[this.data.TabCur]
    const that = this;
    if (!this.data.isRefresh) {
      wx.showLoading()
    }
    apiService.category(category, page).then(function(res) {
      console.log(res)
      wx.hideLoading()
      if (!res.error) {
        that.setData({
          results: res.results,
          isRefresh: false
        })
      } else {
        console.log('请求错误')
        that.setData({
          results: [],
          isRefresh: false
        })
      }
    }).catch(function(e) {
      if (that.data.isRefresh) {
        wx.stopPullDownRefresh()
        that.setData({
          isRefresh: false
        })
      } else {
        wx.hideLoading()
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
    this.setData({
      isRefresh: true
    })
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

  }
})