Page({
  data:{
    markers: [{
      iconPath: "/img/dt.png",
      id: 0,
      latitude: 36.684421,
      longitude: 117.063091,
      width: 19,
      height: 33,
    }],
    detail:[{
      size:"洪家楼海蔚大厦1601"
    }]
  },
    calling: function () {
    wx.makePhoneCall({
      phoneNumber: '12345678900', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

})
