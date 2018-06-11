// pages/posts/posts.js
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
    console.log("onLoad:页面被加载")
    var postList = [{
      object: {
        mydate: new Date().toLocaleDateString()
      },
      title: "Sony PS4",
      postImg: "/images/posts/ps4_01.jpg",
      avatar: "/images/1157623.jpg",
      content: "PS4 is the best console in the World!Just Look and See!!!",
      readNum: 92,
      iineNum: { array: [108] },
      commtNum: 7,
    },
    {
      object: {
        mydate: new Date().toLocaleDateString()
      },
      title: "Nintendo Switch",
      postImg: "/images/posts/ns_01.jpg",
      avatar: "/images/1157623.jpg",
      content: "PS4 is the second best console in the World!",
      readNum: 999,
      iineNum: { array: [999] },
      commtNum: 999,
    },
    {
      object: {
        mydate: new Date().toLocaleDateString()
      },
      title: "Microsoft Xbox",
      postImg: "/images/posts/Xbox_01.jpg",
      avatar: "/images/1157623.jpg",
      content: "Xbox is the third best console in the World!",
      readNum: 7,
      iineNum: { array: [9] },
      commtNum: 0,
    }]
    this.setData({
      postList:postList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady:页面被渲染")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow：页面被显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("posts页面被隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("posts页面被卸载")
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