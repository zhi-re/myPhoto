//category detail.js
const app = getApp();

Page({
  data: {

  },
  
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.categoryDetailTitle,
    });

    var that = this;
    wx.request({
      url: app.globalData.URL_SORT_ONE + options.categoryDetailID,
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      success(res) {
        console.log("请求成功")
        console.log(res.data.data)
        that.setData({
          categoryDetailData: res.data.data
        })
      },
      fail() {
        console.log("请求失败")
      }
    })
  }
})