// pages/history.js
const app = getApp()
const apiService = require('../../utils/apiService')
let yearList = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    scrollLeft: 0,
    tabs: [],
    history: [],
    isLoad: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
    this.setLoadState(true)
    apiService.history().then(function(res) {
      that.setLoadState(false)
      if (!res.error) {
        that.dealData(res.results)
      } else {
        console.log('请求错误')
      }
    }).catch(function(e) {
      that.setLoadState(false)
    })
  },
  //处理数据
  dealData: function(results) {
    let first = results[0].substring(0, 4)
    let last = results[results.length - 1].substring(0, 4)
    let yearCount = first - last
    var years = []
    for (var i = 0; i <= yearCount; i++) {
      let year = first - i
      years.push(year)
      let result = results.filter(function(value, index, array) {
        return value.substr(0, 4) == year
      })
      // .map(function(value, index, array) {
      //   return value.substr(5, 7)
      // })
      yearList.push(result)
    }
    //
    this.setData({
      tabs: years
    })
    this.tabSelect(undefined)
  },

  //选中tab
  tabSelect(e) {
    var index = 0
    if (typeof(e) == "undefined") {
      index = 0
    } else {
      index = e.currentTarget.dataset.id;
    }
    let currentYear = yearList[index]
    let result = currentYear.map(function(value, index, array) {
        return value.substring(5, 7)
      })
      .filter(function(element, index, self) {
        return self.indexOf(element) === index;
      })
    //日期
    var dayResult = []
    var history = []
    for (var i = 0; i < result.length; i++) {
      dayResult = currentYear.filter(function(value, index, array) {
        return value.substring(5, 7) == result[i]
      }).sort()
      history[i] = {
        month: result[i],
        day: dayResult
      }
    }
    this.setData({
      TabCur: index,
      scrollLeft: (index - 1) * 60,
      history: history
    })
  },
  //点击日期
  onItemClick: function(event) {
    let day = event.currentTarget.dataset.gid.replace(/-/g, '/')
    app.globalData.selectDay = day
    wx.switchTab({
      url: '/pages/index/index',
      success: function(e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      }
    })
  },
  setLoadState: function (state) {
    if (!state) {
      wx.stopPullDownRefresh()
    }
    this.setData({
      isLoad: state
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