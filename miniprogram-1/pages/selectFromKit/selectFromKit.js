// pages/selectFromKit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
             { id: 1, name: 1, checked: false },
             { id: 2, name: 2, checked: false },
             { id: 3, name: 3, checked: false },
             { id: 4, name: 4, checked: false },
           ],
           selectilall: false

  },
  select: function (e) {
    let selectValue = e.currentTarget.dataset.name
    let index = e.currentTarget.dataset.index;
    let list = this.data.list
    let newli = 'list[' + index + '].checked';
    this.setData({
      [newli]: !this.data.list[index].checked
    })
    let num = 0;
    for(var i=0;i<this.data.list.length;i++){
      if(this.data.list[i].checked){
        num++;
      }
    }
    if(num == this.data.list.length){
      this.setData({
        selectilall: true
      })
    }else{
      this.setData({
        selectilall: false
      })
    }
  },

  //全选，取消全选
  selectAll: function (e) {
    let list = this.data.list;
    let selectilall = this.data.selectilall;
    if (selectilall == false) {
      for (let i = 0; i < list.length; i++) {
        let newli = 'list[' + i + '].checked';
        this.setData({
          [newli]: true,
          selectilall: true
        })
      }
    } else {
      for (let i = 0; i < list.length; i++) {
        let newli = 'list[' + i + '].checked';
        this.setData({
          [newli]: false,
          selectilall: false
        })
      }
    }
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