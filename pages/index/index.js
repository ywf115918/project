//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    indicatorDots: true,
    interval: 4000,
    duration: 1000,
    currentTab : 0,
    text: [
      {
        id:"/pages/data1/data1",
        size: '现代风格',
        url: '/img/a1.jpg',
      },

      {
        id: "/pages/data1/data1",
        size: '田园风格',
        url: '/img/a2.jpg',
      },

      {
        id: "/pages/data1/data1",
        size: '中式风格',
        url: '/img/a3.jpg',
      },
      {
        id: "/pages/data1/data1",
        size: '欧式风格',
        url: '/img/a4.jpg',
      },
    ],
    Jewellery: [
      '/img/zb3.jpg',
      '/img/zb4.jpg'
    ],
    discount: [
      '特惠套餐',
    ],
    Jewelleryer: [
      '/img/zb1.jpg',
      '/img/zb2.jpg'
    ],  
    imgs: [
      {
        id: '1',
        url: '/img/1.jpg',
      },
      {
        id: '2',
        url: '/img/2.jpg',
      },
      {
        id: '3',
        url: '/img/3.jpg',
      },
      {
        id: '4',
        url: '/img/4.jpg',
      },
    ],
  },
  //事件处理函数
  toOrder: function () {
    wx.navigateTo({
      url: '../orders/orders'
    })
  },
  swichNav:function(e){
  if (this.data.currentTab === e.currentTarget.dataset.current){
        return false;
    }else{
      this.setData({
        currentTab: e.currentTarget.dataset.current
      })
    }
  },
  // bindchange:function(e){
  //   this.setdatal({
  //     currentTab:e.setdatal.current
  //   })
  // }
})
