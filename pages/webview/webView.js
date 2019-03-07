// pages/webview/webView.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    isloading: true,
    isCollected: false,
    data: {},
    timer: undefined
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const data = JSON.parse(decodeURIComponent(options.data))
    console.log("跳转后数据" + data)
    delete data._id
    this.setData({
      data: data
    })
    console.log(data)
    const that = this
    const db = wx.cloud.database()
    db.collection('collects').where({
      desc: that.data.data.desc,
      createdAt: that.data.data.createdAt
    }).get({
      success(res) {
        // res.data 是包含以上定义的两条记录的数组
        console.log(res.data)
        that.setData({
          isCollected: true,
          'data._id': res.data[0]._id
        })
      }
    })
  },
  //收藏
  collect: function(event) {
    wx.showLoading()
    const that = this
    const db = wx.cloud.database()
    if (!this.data.isCollected) {
      db.collection('collects').add({
        data: that.data.data,
        success(res) {
          wx.hideLoading()
          that.setData({
            isCollected: true,
            'data._id': res._id
          })
          wx.showToast({
            title: '收藏成功',
            duration: 1000,
          })
          console.log(res)
        }
      })
    } else {
      console.log(this.data.data)
      db.collection('collects').doc(this.data.data._id).remove({
        success(res) {
          console.log(res)
          wx.hideLoading()
          that.setData({
            isCollected: false
          })

        }
      })
    }
  },
  changeCollectStatus: function() {

  },
  //复制url到剪切板
  copyUrl: function(event) {
    wx.setClipboardData({
      data: event.currentTarget.dataset.link,
      success: res => {
        wx.showToast({
          title: '已复制url',
          duration: 1000,
        })
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