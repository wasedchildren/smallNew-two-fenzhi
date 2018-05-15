Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ["国内", "国际", "财经", "娱乐", "军事", "体育", "其他"],
    num:0,
    news:[
      { title: '外媒称香港回归15年打破“经济将死”预言', date: '2012-07-01T09:34:12.000Z', firstImage: 'http://img1.gtimg.com/news/pics/hv1/38/85/1076/69988613.jpg', source:'中国新闻网'},
      { title: '实德指媒体窃公司机密 已向某媒体递律师函', date: '2012-04-21T11:32:04.000Z', firstImage: 'http://img1.gtimg.com/finance/pics/hv1/33/207/1023/66573393.jpg',source: '中国新闻网'},
      { title: '公务员医疗费用成迷 学者呼吁管理应公开透明', date: '2012-02-26T08:13:00.000Z', firstImage: 'http://img1.gtimg.com/finance/pics/hv1/241/102/983/63945826.jpg', source: '中国新闻网'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  tabClick(e) {
    var num = e.currentTarget.dataset.index
    this.setData({ num })
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