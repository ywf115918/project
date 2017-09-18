Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "大理石",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '大理石1',
            image: "/img/b1.jpg"
          },
          {
            child_id: 2,
            name: '大理石2',
            image: "/img/b2.jpg"
          },
          {
            child_id: 3,
            name: '大理石3',
            image: "/img/b3.jpg"
          },
          {
            child_id: 4,
            name: '大理石4',
            image: "/img/b4.jpg"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "普通",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '普通',
            image: "/img/b1.jpg"
          },
          {
            child_id: 2,
            name: '普通',
            image: "/img/b2.jpg"
          },
          {
            child_id: 3,
            name: '普通',
            image: "/img/b3.jpg"
          },
          {
            child_id: 4,
            name: '普通',
            image: "/img/b4.jpg"
          },
          {
            child_id: 5,
            name: '普通',
            image: "/img/b5.jpg"
          },
          {
            child_id: 6,
            name: '普通',
            image: "/img/b1.jpg"
          },
          {
            child_id: 7,
            name: '普通',
            image: "/img/b2.jpg"
          },
          {
            child_id: 8,
            name: '普通',
            image: "/img/b3.jpg"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "瓷的",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '瓷的',
            image: "/img/b4.jpg"
          },
          {
            child_id: 2,
            name: '瓷的',
            image: "/img/b3.jpg"
          },
          {
            child_id: 3,
            name: '瓷的',
            image: "/img/b4.jpg"
          },
          {
            child_id: 4,
            name: '瓷的',
            image: "/img/b3.jpg"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "金的",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})  
