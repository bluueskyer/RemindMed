// pages/SimaddMed/SimaddMed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow_03: false,
    listData_03:[[1,2,3,4,5,6,7,8,9,10],['.0','.1','.2','.3','.4','.5','.6','.7','.8','.9'],['片','g','mg','ml','杯','IU']],
    picker_03_data:['请点击选择'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  showPicker_03: function () {
    this.setData({
      isShow_03: true
    })
  },
  sureCallBack_03 (e) {
    let data = e.detail
    this.setData({
      isShow_03: false,
      picker_03_data: e.detail.choosedData,
      picker_03_index:JSON.stringify(e.detail.choosedIndexArr)
    })
  },
  cancleCallBack_03 () {
    this.setData({
      isShow_03: false,
    })
  },

  onLoad: function (options) {

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