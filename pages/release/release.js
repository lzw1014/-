// pages/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr: [
      "https://d2i72ju5buk5xz.cloudfront.net/gsc/1JN2LY/1d/31/3f/1d313fd0c0b24ff6bb4fa74198a0a7a0/images/我的_穿搭档案_/u344.png?token=ce42842cd512022a2c85f29492818234",
      "https://d2i72ju5buk5xz.cloudfront.net/gsc/1JN2LY/1d/31/3f/1d313fd0c0b24ff6bb4fa74198a0a7a0/images/我的_穿搭档案_/u346.png?token=74ab57571e2a1c4148317a0b83d026b9"
    ],
    fabu: [{
        time: "今天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "2",
        ping: "5",
        id: "1"
      },
      {
        time: "昨天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "5",
        ping: "0",
        id: "2"
      },
      {
        time: "前天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "1",
        ping: "1",
        id: "3"
      },
      {
        time: "前天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "1",
        ping: "1",
        id: "4"
      },
      {
        time: "前天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "1",
        ping: "1",
        id: "5"
      },
      {
        time: "前天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "1",
        ping: "1",
        id: "6"
      },
      {
        time: "前天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "1",
        ping: "1",
        id: "7"
      },
      {
        time: "前天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "1",
        ping: "1",
        id: "8"
      },
      {
        time: "前天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "1",
        ping: "1",
        id: "9"
      },
      {
        time: "前天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "1",
        ping: "1",
        id: "10"
      },
      {
        time: "前天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "1",
        ping: "1",
        id: "11"
      },
      {
        time: "前天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "1",
        ping: "1",
        id: "12"
      },
      {
        time: "前天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "1",
        ping: "1",
        id: "13"
      },
      {
        time: "前天",
        miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
        zan: "1",
        ping: "1",
        id: "14"
      }
    ],
    jiazai: [{
      time: "今天",
      miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
      zan: "2",
      ping: "5",
      id: "15"
    }, {
      time: "今天",
      miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
      zan: "2",
      ping: "5",
      id: "16"
    }, {
      time: "今天",
      miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
      zan: "2",
      ping: "5",
      id: "17"
    }, {
      time: "今天",
      miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
      zan: "2",
      ping: "5",
      id: "18"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  previewImg(e) {
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: imgArr[index], //当前图片地址
      urls: imgArr, //所有要预览的图片的地址集合 数组形式
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  upper() {
    console.log("daol")
  },
  lower() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 3000
    })
    var fabu = this.data.jiazai;
    console.log(fabu)
    this.setData({
      fabu: this.data.fabu.concat(fabu)
    })
    setTimeout(function () {
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
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