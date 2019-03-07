// pages/collection/collection.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: '',
        // imgArr: [
        //   "https://d2i72ju5buk5xz.cloudfront.net/gsc/1JN2LY/1d/31/3f/1d313fd0c0b24ff6bb4fa74198a0a7a0/images/我的_穿搭档案_/u344.png?token=4173aeb0eef493ae93115a318e239556",
        //   "https://d2i72ju5buk5xz.cloudfront.net/gsc/1JN2LY/1d/31/3f/1d313fd0c0b24ff6bb4fa74198a0a7a0/images/我的_穿搭档案_/u346.png?token=166e758576f791424f9c581b81054646"
        // ],
        shoucang: [{
            time: "18-02-24",
            miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
            zan: "2",
            ping: "5",
            id: "1",
            name: "欲问青天",
            arr: ['https://d2i72ju5buk5xz.cloudfront.net/gsc/1JN2LY/1d/31/3f/1d313fd0c0b24ff6bb4fa74198a0a7a0/images/我的_穿搭档案_/u344.png?token=4173aeb0eef493ae93115a318e239556', 'https://d2i72ju5buk5xz.cloudfront.net/gsc/1JN2LY/1d/31/3f/1d313fd0c0b24ff6bb4fa74198a0a7a0/images/我的_穿搭档案_/u346.png?token=166e758576f791424f9c581b81054646']
        }, {
            time: "18-02-24",
            miaoshu: "求助，这些衣服怎么搭配好看？在线等！",
            zan: "2",
            ping: "5",
            id: "1",
            name: "欲问青天",
            arr: ['https://d2i72ju5buk5xz.cloudfront.net/gsc/1JN2LY/1d/31/3f/1d313fd0c0b24ff6bb4fa74198a0a7a0/images/我的_穿搭档案_/u344.png?token=4173aeb0eef493ae93115a318e239556', 'https://d2i72ju5buk5xz.cloudfront.net/gsc/1JN2LY/1d/31/3f/1d313fd0c0b24ff6bb4fa74198a0a7a0/images/我的_穿搭档案_/u346.png?token=166e758576f791424f9c581b81054646']
        }, ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const that = this;
        wx.getUserInfo({
            success(res) {
                that.setData({
                    userInfo: res.userInfo
                })
            }
        })
        wx.request({
            url: '../../common/test.json',
            dataType: 'json',
            method: 'get',
            success(res) {
                console.log(res)
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },
    previewImg(index, e) {
        console.log(index, e)
            // var index = e.currentTarget.dataset.index;
            // var imgArr = this.data.imgArr;
            // wx.previewImage({
            //   current: imgArr[index], //当前图片地址
            //   urls: imgArr, //所有要预览的图片的地址集合 数组形式
            //   success: function (res) { },
            //   fail: function (res) { },
            //   complete: function (res) { },
            // })
    },
    upper() {
        console.log("top")
    },
    lower() {
        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 3000
        })
        var jiazai = this.data.jiazai;
        console.log(jiazai)
        this.setData({
            shoucang: this.data.shoucang.concat(zaijia)
        })
        setTimeout(function() {
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