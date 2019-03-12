// pages/search/search.js
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
    results: [],
    searchText: "",
    isRefresh: false,
    isLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 搜索框的输入
   */
  searchItem(e) {
    let key = e.detail.value.toLowerCase();
    const that = this;
    that.setData({ 
      searchText : key
    })
  },

  /**
   * 搜索
   */
  search: function (event) {
    const that = this;
    if (typeof this.data.searchText == "undefined" || this.data.searchText == null ||    this.data.searchText == ""){
      wx.showToast({
        title: '请输入要搜索的内容',
      })
    }
    this.getdata(this.data.searchText,"android",page);
  },

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
   * 获取搜索结果
   */
  getdata: function (keyWord, category,pages) {
    const that = this;
    if (!this.data.isRefresh && page == 1) {
      wx.showLoading()
    }
    apiService.search(keyWord, category, pages).then(function(res){
      console.log(res)
      wx.hideLoading()
      if (!res.error) {
        if (page > 1) {
          that.setData({
            results: that.data.results.concat(res.results),
            isRefresh: false,
            isLoading: false
          })
        } else {
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
    }).catch(function (e) {
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
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      isRefresh: true
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    page = page + 1
    this.setData({
      isLoading: true
    })
    
    this.getdata(this.data.searchText, "android", page);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})