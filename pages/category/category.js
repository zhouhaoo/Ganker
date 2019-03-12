// pages/category/category.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const app = getApp()
const apiService = require('../../utils/apiService')
/**
 * 页数变量
 */
var page = 1
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
    isRefresh: false,
    isLoading:false
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
        if(page>1){
          that.setData({
            results: that.data.results.concat(res.results),
            isRefresh: false,
            isLoading:false
          })
        }else{
          that.setData({
            results: res.results,
            isRefresh: false
          })
        }
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
  onTabsItemTap: function (event) {
    console.log(event)
    wx.previewImage({
      current: event.currentTarget.dataset.gid[0], // 当前显示图片的http链接
      urls: event.currentTarget.dataset.gid // 需要预览的图片http链接列表
    })
  }
  ,
  //跳转详情页
  onItemClick: function (event) {
    //避免传输解析错误，进行编码
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
    this.setData({
      isRefresh: true
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    page=page+1
    this.setData({
      isLoading: true
    })
    this.getdata(page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})