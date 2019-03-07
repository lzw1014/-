// pages/banner/banner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '',
    imgUrl: [
      '../../images/banner1.jpg',
      '../../images/banner2.jpg'
    ],
    current: 0,
    flag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const that = this;
    wx.getSystemInfo({
      success(res) {
        that.setData({
          height: res.windowHeight
        })
      }
    })
  },
  change (e) {
    const index = this.data.imgUrl.length;
    const current = e.detail.current + 1;
    if (index == current) {
      this.setData({
        flag: true
      })
    }
  },
  login () {
    wx.switchTab({
      url: '../index/index',
    })
  },
  onGotUserInfo (e) {

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