// pages/dangan/dangan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    query.select('.dangan-box').boundingClientRect(function (rect) {
      console.log(rect.width)
    }).exec();
    //图片宽度除以刻度条数
    //滑动距离除以上面的值
    //得到的值判断整数 是整数相加显示
  },
  scroll (e) {
    console.log(e.detail)
  },
  isInteger (num) {
    return Math.floor(num) === num
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})