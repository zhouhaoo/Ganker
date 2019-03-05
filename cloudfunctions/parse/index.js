// 云函数入口文件
const cloud = require('wx-server-sdk')

const Towxml = require('towxml');

const towxml = new Towxml();

const request = require('request');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const { func, type, url } = event
  let res
  const value = await getHttpBody(url);
  if (func === 'parse') {
    if (type === 'markdown') {
      res = await towxml.toJson(value || '', 'markdown');
    } else {
      res = await towxml.toJson(value || '', 'html');
    }
  }
  console.log("返回参数res：" + res)
  return {
    data: res
  }
 }

const getHttpBody = (url) => {
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        reject(error)
      } else {
        try {
          resolve(body)
        } catch (e) {
          reject(e)
        }
      }
    })
  })
}