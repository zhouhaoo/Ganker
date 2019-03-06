Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    selected: 0,
    "list": [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/images/nav/new_off.png",
        "selectedIconPath": "/images/nav/new_on.png",
        "text": "最新"
      },
      {
        "pagePath": "/pages/category/category",
        "iconPath": "/images/nav/type_off.png",
        "selectedIconPath": "/images/nav/type_on.png",
        "text": "分类"
      },
      {
        "pagePath": "/pages/collection/collection",
        "iconPath": "/images/nav/collection_off.png",
        "selectedIconPath": "/images/nav/collection_on.png",
        "text": "收藏"
      },
      {
        "pagePath": "/pages/mine/about",
        "iconPath": "/images/nav/about_off.png",
        "selectedIconPath": "/images/nav/about_on.png",
        "text": "关于"
      }
    ]
  },
  methods: {
    switchTab(e) {      
      const url = e.currentTarget.dataset.path
      wx.switchTab({
        url
      })
    }
  },
  pageLifetimes: {
  },
})