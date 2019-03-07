// pages/yichu/yichu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yichuLeibie: ['全部', '帽子', '穿戴品', '上衣', '裙子', '连体裙', '裤子', '包包', '内衣', '鞋子']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  chooseType (e) {
    console.log(e._relatedInfo.anchorTargetText)
    const type = e._relatedInfo.anchorTargetText;
    switch (type) {
      case "全部":
        break;
      case "帽子":
        break;
      case "穿戴品":
        break;
      case "上衣":
        break;
      case "裙子":
        break;
      case "连体裙":
        break;
      case "裤子":
        break;
      case "包包":
        break;
      case "内衣":
        break;
      case "鞋子":
        break;
    }
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