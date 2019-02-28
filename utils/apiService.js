//干货集中营 API 文档 https://gank.io/api

const API_BASE_URL = 'https://gank.io/api'
//请求
const request = (url, method, data) => {
  let _url = API_BASE_URL + url
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        //表单格式
        // 'Content-Type': 'application/x-www-form-urlencoded'
        //json格式
        'Content-Type': 'application/json; charset=UTF-8'
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}

/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function(callback) {
  var Promise = this.constructor;
  return this.then(
    function(value) {
      Promise.resolve(callback()).then(
        function() {
          return value;
        }
      );
    },
    function(reason) {
      Promise.resolve(callback()).then(
        function() {
          throw reason;
        }
      );
    }
  );
}

module.exports = {
  request,
  //获取最新一天的干货  例如： http://gank.io/api/today 
  todayData: () => {
    return request('/today', 'get')
  },
  // 搜索 API http://gank.io/api/search/query/listview/category/Android/count/10/page/1 
  //category 后面可接受参数 all | Android | iOS | 休息视频 | 福利 | 拓展资源 | 前端 | 瞎推荐 | App
  // count 最大 50
  search: () => {
    return request('/search/query/listview/category','get')
  },
}