//index.js
//获取应用实例
const app = getApp()
const apiService = require('../../utils/apiService')
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    DotStyle: true,
    cardCur: 0,
    indicatorDots: true,
    indicatorActiveColor: '#1296db',
    indicatorColor: '#e6e6e6',
    autoplay: true,
    interval: 5000,
    duration: 1000,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    category: ["iOS",
      "拓展资源",
      "瞎推荐",
      "Android",
      "App",
      "休息视频",
      "福利",
      "前端"
    ],
    android: [{
        "_id": "5c0622429d2122308e7445cf",
        "createdAt": "2018-12-04T06:44:18.364Z",
        "desc": "一个基于ijkplayer的完整视频播放器封装，支持自定义，拓展性强，已经用于实际开发中",
        "images": [
          "http://img.gank.io/0cd8baa4-7d96-40fb-ab0c-4b3668a7ac4d",
          "http://img.gank.io/35066fc9-4c67-498d-b9e1-f8e3ca7410e1",
          "http://img.gank.io/ad8b369e-c643-4631-afdd-4466aab4f7fd",
          "http://img.gank.io/101d45df-c66b-4610-809a-734fbca99967",
          "http://img.gank.io/d8755a02-fe71-4562-ac9f-4d7d6b0d3358"
        ],
        "publishedAt": "2019-02-13T03:26:06.640Z",
        "source": "web",
        "type": "Android",
        "url": "https://github.com/yangchong211/YCVideoPlayer",
        "used": true,
        "who": "fingdo"
      },
      {
        "_id": "5c2df1479d2122759a04b597",
        "createdAt": "2019-01-03T11:25:59.115Z",
        "desc": "Android 一键加入侧滑返回 (类似“小米MIX”和新版“即刻”滑动返回)",
        "images": [
          "https://ww1.sinaimg.cn/large/0073sXn7ly1fze96rdfhmg308w0ft7wh",
          "https://ww1.sinaimg.cn/large/0073sXn7ly1fze96s6tdag308w0ftjvw"
        ],
        "publishedAt": "2019-01-21T00:00:00.0Z",
        "source": "web",
        "type": "Android",
        "url": "https://github.com/qinci/AndroidSlideBack",
        "used": true,
        "who": "qinci"
      },
      {
        "_id": "5c30271a9d2122759a04b59d",
        "createdAt": "2019-01-05T03:40:10.216Z",
        "desc": "一个漂亮的卡片式切换菜单",
        "images": [
          "https://ww1.sinaimg.cn/large/0073sXn7ly1fze96t2usdg30m80gogrr"
        ],
        "publishedAt": "2019-01-21T00:00:00.0Z",
        "source": "web",
        "type": "Android",
        "url": "https://github.com/notice501/coolMenu",
        "used": true,
        "who": "foocoder"
      }
    ],
    images: [{
        "_id": "5c4578db9d212264d4501d40",
        "createdAt": "2019-01-21T07:46:35.304Z",
        "desc": "2019-01-21",
        "publishedAt": "2019-01-21T00:00:00.0Z",
        "source": "web",
        "type": "福利",
        "url": "https://ws1.sinaimg.cn/large/0065oQSqgy1fze94uew3jj30qo10cdka.jpg",
        "used": true,
        "who": "lijinshanmx"
      },
      {
        "_id": "5c6385b39d21225dd7a417ce",
        "createdAt": "2019-02-13T02:49:23.946Z",
        "desc": "2019-02-13",
        "publishedAt": "2019-02-13T02:49:33.16Z",
        "source": "web",
        "type": "福利",
        "url": "https://ws1.sinaimg.cn/large/0065oQSqly1g04lsmmadlj31221vowz7.jpg",
        "used": true,
        "who": "lijinshanmx"
      },
      {
        "_id": "5c6a4ae99d212226776d3256",
        "createdAt": "2019-02-18T06:04:25.571Z",
        "desc": "2019-02-18",
        "publishedAt": "2019-02-18T06:05:41.975Z",
        "source": "web",
        "type": "福利",
        "url": "https://ws1.sinaimg.cn/large/0065oQSqly1g0ajj4h6ndj30sg11xdmj.jpg",
        "used": true,
        "who": "lijinshanmx"
      }
    ],
    results: {
      "Android": [{
          "_id": "5c0622429d2122308e7445cf",
          "createdAt": "2018-12-04T06:44:18.364Z",
          "desc": "一个基于ijkplayer的完整视频播放器封装，支持自定义，拓展性强，已经用于实际开发中",
          "images": [
            "http://img.gank.io/0cd8baa4-7d96-40fb-ab0c-4b3668a7ac4d",
            "http://img.gank.io/35066fc9-4c67-498d-b9e1-f8e3ca7410e1",
            "http://img.gank.io/ad8b369e-c643-4631-afdd-4466aab4f7fd",
            "http://img.gank.io/101d45df-c66b-4610-809a-734fbca99967",
            "http://img.gank.io/d8755a02-fe71-4562-ac9f-4d7d6b0d3358"
          ],
          "publishedAt": "2019-02-13T03:26:06.640Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/yangchong211/YCVideoPlayer",
          "used": true,
          "who": "fingdo"
        },
        {
          "_id": "5c2df1479d2122759a04b597",
          "createdAt": "2019-01-03T11:25:59.115Z",
          "desc": "Android 一键加入侧滑返回 (类似“小米MIX”和新版“即刻”滑动返回)",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze96rdfhmg308w0ft7wh",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze96s6tdag308w0ftjvw"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/qinci/AndroidSlideBack",
          "used": true,
          "who": "qinci"
        },
        {
          "_id": "5c30271a9d2122759a04b59d",
          "createdAt": "2019-01-05T03:40:10.216Z",
          "desc": "一个漂亮的卡片式切换菜单",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze96t2usdg30m80gogrr"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/notice501/coolMenu",
          "used": true,
          "who": "foocoder"
        },
        {
          "_id": "5c3089459d2122759d3e5ff4",
          "createdAt": "2019-01-05T10:39:01.88Z",
          "desc": "仿QQ图片发送挺炫效果的加载View,效果赞",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze96wakcng30dc0ngb29"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/hewking/HaloImageProgressView",
          "used": true,
          "who": "hewking"
        },
        {
          "_id": "5c36dc329d212264ce006f29",
          "createdAt": "2019-01-10T05:46:26.150Z",
          "desc": "结合 Zxing Zbar，并处理优化的极速扫码",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/nanchen2251/AiYaScanner",
          "used": true,
          "who": "LiuShilin"
        },
        {
          "_id": "5c384b029d212264ce006f2d",
          "createdAt": "2019-01-11T07:51:30.67Z",
          "desc": "一起来复现网易云音乐引导页效果",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze972ev1og309z0gok3u",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze973gq93g309c0godph"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/wobiancao/Music163GuideDemo",
          "used": true,
          "who": "兔子吃过窝边草"
        },
        {
          "_id": "5c3853279d212264d4501d23",
          "createdAt": "2019-01-11T08:26:15.564Z",
          "desc": "升级UETool，可查看修改任意安装App的布局参数",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97bnyefg30dc0o0kjn"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/zhangke3016/VirtualUETool",
          "used": true,
          "who": "张珂"
        },
        {
          "_id": "5c3ecde79d212264d4501d2c",
          "createdAt": "2019-01-16T06:23:35.316Z",
          "desc": "💍一个简洁而优雅的Android原生UI框架，解放你的双手！",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97f16k0j305e09mq3e",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97fg7orj305e09maag",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97fxcgxj305e09mq5n",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97g6ey1j305e09mq3g",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97ge8pij305e09mjru"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "Android",
          "url": "https://github.com/xuexiangjys/XUI",
          "used": true,
          "who": "xuexiangjys"
        },
        {
          "_id": "5c4572419d212264cbcc5bd7",
          "createdAt": "2019-01-21T07:18:25.158Z",
          "desc": "此库应用视频过滤器生成Mp4和ExoPlayer视频以及使用Camera2进行视频录制。",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97qh5sxg308w050tkd",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97s5aung308w050qks",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97u1e6mg308w050nh3"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "Android",
          "url": "https://github.com/MasayukiSuda/GPUVideo-android",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c4572d69d212264cbcc5bd8",
          "createdAt": "2019-01-21T07:20:54.364Z",
          "desc": "一个易于使用的表格验证器为Kotlin和Android。",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97ui6cpj30uk0kiq5m"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "Android",
          "url": "https://github.com/afollestad/vvalidator",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c4573b89d212264d18bb26d",
          "createdAt": "2019-01-21T07:24:40.432Z",
          "desc": "初学者入门学习Bloc模式，RxDart，sqflite，Fluro和Dio来构建一个flutter的项目。",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97znin9g308w0i57wi"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "Android",
          "url": "https://github.com/KingWu/flutter_starter_kit",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c4573d99d212264d4501d3a",
          "createdAt": "2019-01-21T07:25:13.956Z",
          "desc": "美丽而简单的色带视图，闪烁效果。",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze988tynvg309d0gv1l0",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze98deowug309d0gvnpd"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "Android",
          "url": "https://github.com/skydoves/AndroidRibbon",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c45748b9d212264ce006f46",
          "createdAt": "2019-01-21T07:28:11.298Z",
          "desc": "一个PhotoView库的指示器",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze98hd5hjj30qn0czq9c"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "Android",
          "url": "https://github.com/iammert/PhotoViewIndicator",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c46e85d9d212264d4501d47",
          "createdAt": "2019-02-13T02:41:46.573Z",
          "desc": "在图片上做标签，图片可缩放。",
          "images": [
            "http://img.gank.io/c8aecd99-61a9-4634-aa91-1b7ab39081ab"
          ],
          "publishedAt": "2019-02-13T02:41:56.484Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/lihangleo2/Imgdots",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c4813179d212264d18bb278",
          "createdAt": "2019-01-23T07:09:11.96Z",
          "desc": "AppInit 是一款 Android 应用初始化框架，基于组件化的设计思路，功能灵活，使用简单。",
          "images": [
            "http://img.gank.io/7b10b382-7568-474d-bdab-7de0bb403615"
          ],
          "publishedAt": "2019-02-12T17:45:33.73Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/Meituan-Dianping/AppInit",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c491af39d212264d18bb279",
          "createdAt": "2019-01-24T01:54:59.296Z",
          "desc": "一款简单高效的滑动库，模仿MIUI滑动返回或即刻返回功能",
          "images": [
            "http://img.gank.io/3ac00581-11e4-4c2d-ba32-e3192d5840d0"
          ],
          "publishedAt": "2019-02-13T02:44:43.299Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/dkzwm/EasySwipeLayout",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c64d62f9d212226776d324d",
          "createdAt": "2019-02-14T02:45:03.987Z",
          "desc": "针对RecyclerView高效刷新，多类型列表，异步数据更新，崩溃等各种复杂难处理场景的高性能易用的列表库",
          "images": [
            "http://img.gank.io/cb9796c3-22c3-4f0a-8986-63914ec88642"
          ],
          "publishedAt": "2019-02-14T06:18:36.304Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/SilenceDut/diffadapter",
          "used": true,
          "who": "fingdo"
        },
        {
          "_id": "5c6924aa9d212226806fd415",
          "createdAt": "2019-02-17T09:08:58.785Z",
          "desc": "还在写drawable.xml？快来试试Folivora吧",
          "images": [
            "http://img.gank.io/1dec547e-0c46-4750-90cf-32f0aa59de65"
          ],
          "publishedAt": "2019-02-18T06:00:23.871Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/Cricin/Folivora",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c6a067c9d212226776d3254",
          "createdAt": "2019-02-18T01:12:28.323Z",
          "desc": " CircleProgressView圆形渐变的进度控件，动画效果纵享丝滑。",
          "images": [
            "http://img.gank.io/c5e97ecf-3847-4a98-86f1-6b24219e53b4"
          ],
          "publishedAt": "2019-02-18T05:51:43.182Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/jenly1314/CircleProgressView",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c6a49b99d2122267ad2c503",
          "createdAt": "2019-02-18T05:59:21.90Z",
          "desc": "一个Android App快速开发框架。",
          "images": [
            "http://img.gank.io/d5a61f4f-5718-475c-92ac-2bac01b437d5"
          ],
          "publishedAt": "2019-02-18T06:00:33.410Z",
          "source": "chrome",
          "type": "Android",
          "url": "https://github.com/ddnosh/AndroidQuick",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c71169c9d212251b29ad46d",
          "createdAt": "2019-02-23T09:47:08.688Z",
          "desc": "WaveView优雅的水波纹动画实现",
          "images": [
            "http://img.gank.io/9335fc17-d0c4-44cc-ace7-bcf75497b425"
          ],
          "publishedAt": "2019-02-25T01:27:07.146Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/jenly1314/WaveView",
          "used": true,
          "who": "fingdo"
        },
        {
          "_id": "5c74b1eb9d21223945d4dde6",
          "createdAt": "2019-02-26T06:23:16.419Z",
          "desc": "Android组件化开发实践和案例分享案例",
          "images": [
            "http://img.gank.io/b440c48f-9b77-4974-9789-1a6b7e7fa2fa"
          ],
          "publishedAt": "2019-02-26T06:24:05.977Z",
          "source": "web",
          "type": "Android",
          "url": "https://github.com/yangchong211/LifeHelper",
          "used": true,
          "who": "fingdo"
        }
      ],
      "App": [{
          "_id": "5c31d8a79d21222bd38ce73e",
          "createdAt": "2019-01-06T10:29:59.746Z",
          "desc": "flutter开发的干货集中营客户端",
          "publishedAt": "2019-01-25T13:02:10.57Z",
          "source": "web",
          "type": "App",
          "url": "https://github.com/fujianlian/GankFlutter",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c370ae29d212264d18bb25e",
          "createdAt": "2019-01-16T05:11:23.740Z",
          "desc": "基于组件化 + MVP + Retrofit + RxKotlin + Dagger2实现的一款用Kotlin语言编写的影视类应用。",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze9706gdzj30ae0kqmyw",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze970ocgxj30ae0ks0tc",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97124aej30af0kq404"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "App",
          "url": "https://github.com/guofudong/KotlinAndroid",
          "used": true,
          "who": "guofudong"
        },
        {
          "_id": "5c39cecb9d212264ce006f2e",
          "createdAt": "2019-01-12T11:26:03.526Z",
          "desc": "使用flutter开发的俄罗斯方块游戏",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97da5y7g30c20j6ap9"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "App",
          "url": "https://github.com/boyan01/flutter-tetris",
          "used": true,
          "who": "YangBin"
        },
        {
          "_id": "5c3b55829d212264cbcc5bc9",
          "createdAt": "2019-01-13T15:13:06.8Z",
          "desc": "高仿书旗小说 Flutter版，支持iOS、Android",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97epggnj30jg0ftgze"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "App",
          "url": "https://github.com/huanxsd/flutter_shuqi",
          "used": true,
          "who": "Daniel"
        },
        {
          "_id": "5c4574069d212264ce006f45",
          "createdAt": "2019-01-21T07:25:58.32Z",
          "desc": "一个flutter的音乐应用程序",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze98gfasag30a80i84qp"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "App",
          "url": "https://github.com/singhbhavneet/Bungee",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c62410a9d212243283ecd24",
          "createdAt": "2019-02-12T10:00:49.566Z",
          "desc": "又一个使用Flutter开发的干货集中营~",
          "images": [
            "http://img.gank.io/2ccc6bb0-f859-454e-aca3-4b14610a200d",
            "http://img.gank.io/6ce29d92-3e6d-4efd-8aee-b7f56ebdab87",
            "http://img.gank.io/f748ed83-733f-4823-a2d4-0e3cac1d7bbc",
            "http://img.gank.io/e3331261-a94c-4dd2-b441-a06ab048c191",
            "http://img.gank.io/99fd7fbf-1ccd-4268-9843-3688fe513fdf"
          ],
          "publishedAt": "2019-02-12T10:01:04.688Z",
          "source": "web",
          "type": "App",
          "url": "https://github.com/dingputongxi/flutter_gank",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c661b6c9d2122267c8d6d8c",
          "createdAt": "2019-02-15T01:52:44.445Z",
          "desc": "QuickGank: 一款基于AndroidQuick快速开发框架的Gank.io客户端",
          "images": [
            "http://img.gank.io/4fcc821b-22c5-4d1c-8086-eefd7877c097",
            "http://img.gank.io/47e9556e-cb87-4645-835f-64bbcd00f0e9"
          ],
          "publishedAt": "2019-02-18T06:01:22.955Z",
          "source": "web",
          "type": "App",
          "url": "https://blog.csdn.net/ddnosh/article/details/87340502",
          "used": true,
          "who": "lijinshanmx"
        }
      ],
      "iOS": [{
          "_id": "58e98313421aa9544b773f9d",
          "createdAt": "2017-04-09T08:40:51.874Z",
          "desc": "购物车类的抛物线动画（支持上抛或者下抛） && 阻尼动画（弹球动画）",
          "images": [
            "http://img.gank.io/99a2362c-3c39-4975-b98f-6c8981bc970d"
          ],
          "publishedAt": "2019-02-13T03:02:27.510Z",
          "source": "web",
          "type": "iOS",
          "url": "https://github.com/jinht/ShopCarAnimation",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "58e98325421aa954511ebe47",
          "createdAt": "2017-04-09T08:41:09.153Z",
          "desc": "悬浮球/悬浮按钮/辅助按钮（类似于iOS系统自带的AssistiveTouch/京东/聚划算/建行等的辅助按钮）",
          "images": [
            "http://img.gank.io/b230a9b6-3e08-4cfd-b09e-b5a100ebd571"
          ],
          "publishedAt": "2019-02-13T03:02:12.359Z",
          "source": "web",
          "type": "iOS",
          "url": "https://github.com/jinht/FloatingBall",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c403e919d212264d4501d30",
          "createdAt": "2019-01-17T08:36:33.526Z",
          "desc": "一个完善的iOS UI敏捷开发框架，基于UIKit，包含常用控件的链式API拓展、一个数据驱动的列表框架、一个事件处理队列。",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97l9tq7g30ad0ih1ky",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze97p50emg30ad0ihkjl"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "iOS",
          "url": "https://github.com/tbl00c/ZZFLEX",
          "used": true,
          "who": "夜尽天明"
        },
        {
          "_id": "5c45754b9d212264cbcc5bda",
          "createdAt": "2019-01-21T07:31:23.953Z",
          "desc": "一个iOS菜单。",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze98jrz88j31po0mix1b"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "iOS",
          "url": "https://github.com/TwoLivesLeft/Menu",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c4575829d212264ce006f47",
          "createdAt": "2019-01-21T07:32:18.570Z",
          "desc": "三行代码组件化集成 Flutter！可用于已有 iOS 项目，对原工程无侵入，无需更改原项目配置，集成后可直接以组件形式开发 Flutter 业务。",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze98lym9lg308r0hph7t"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "iOS",
          "url": "https://github.com/jiisd/YHFlutterAdapter",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c4575989d212264d4501d3d",
          "createdAt": "2019-01-21T07:32:40.819Z",
          "desc": "秒级! 三行代码实现iOS视频压缩、变速、混音、合并、水印、旋转、换音、裁剪 ! 支持不同分辩率，支持你能想到的各种混合操作! 更多功能不断增加中... iOS 8.0 +",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze98nrqklg30ax0izh4o",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze98puthvg30aj0i3nkp"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "iOS",
          "url": "https://github.com/CoderHenry66/WAVideoBox",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c4575c69d212264ce006f49",
          "createdAt": "2019-01-21T07:33:26.792Z",
          "desc": "Swift / Python图像像素化器。",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze98q9ydbj30ko10wmyn",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze98vh7v8j30u01hq7wi",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze98wi806j30ku112tcw",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze98xgwk8j30u01hggqe"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "iOS",
          "url": "https://github.com/gsurma/pixelizator",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c4575e69d212264cbcc5bdc",
          "createdAt": "2019-01-21T07:33:58.771Z",
          "desc": "适用于iOS的简单路由库。",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze98xy35jj30u00u0gnp"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "iOS",
          "url": "https://github.com/reececomo/XRouter",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c45765e9d212264ce006f4a",
          "createdAt": "2019-01-21T07:35:58.380Z",
          "desc": "AnimatedTabBar是一个Swift UI模块库，用于向iOS tabBar项目和图标添加动画。",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze98yh8yog30go03cjv6"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "iOS",
          "url": "https://github.com/AlbGarciam/AnimatedTabBar",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c47cb309d212264d18bb276",
          "createdAt": "2019-01-23T02:02:24.827Z",
          "desc": "一句代码就可为你的数据添加一级和二级目录缓存，支持单独删除指定文件下的文件",
          "images": [
            "http://img.gank.io/560d337b-bd78-44bd-bbe5-49075c2a16b3"
          ],
          "publishedAt": "2019-02-18T05:55:12.480Z",
          "source": "web",
          "type": "iOS",
          "url": "https://github.com/dudongge/DDGDataCache_OC",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c622a949d212243205cc80c",
          "createdAt": "2019-02-18T05:53:18.123Z",
          "desc": "实现所有主流APP分类选择效果，纯swift，简单易用，灵活扩展.",
          "images": [
            "http://img.gank.io/3ba9a9e7-731e-4bd3-a8c3-cb349677483d",
            "http://img.gank.io/1f0d01ab-1349-4c95-8a4f-fd1c1f9ec612",
            "http://img.gank.io/1bfac1f1-7dd1-486e-9d3f-004959da0deb"
          ],
          "publishedAt": "2019-02-18T05:53:20.699Z",
          "source": "web",
          "type": "iOS",
          "url": "https://github.com/pujiaxin33/JXSegmentedView",
          "used": true,
          "who": "lijinshanmx"
        }
      ],
      "休息视频": [{
          "_id": "5c4578ae9d212264ce006f4b",
          "createdAt": "2019-01-21T07:45:50.59Z",
          "desc": "#大早上的你是想笑死我吗 ",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "休息视频",
          "url": "https://v.douyin.com/NwdsVy/",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c638c0b9d2122132f83cfbf",
          "createdAt": "2019-02-13T03:16:27.705Z",
          "desc": "#感谢家人一直在我身后为我打气 我会更努力",
          "publishedAt": "2019-02-13T03:16:39.534Z",
          "source": "web",
          "type": "休息视频",
          "url": "https://v.douyin.com/YN4GQp/",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c6a4b2e9d212226806fd419",
          "createdAt": "2019-02-18T06:05:34.265Z",
          "desc": "#抖音，记录美好生活# 回首掏！😄😆",
          "publishedAt": "2019-02-18T06:05:46.338Z",
          "source": "web",
          "type": "休息视频",
          "url": "https://v.douyin.com/YDmdxx/ ",
          "used": true,
          "who": "lijinshanmx"
        }
      ],
      "前端": [{
          "_id": "5c4bfdc19d212243205cc7f3",
          "createdAt": "2019-01-26T06:27:13.191Z",
          "desc": "这篇文章聊明白管理状态这一堆看起来挺复杂的东西。",
          "publishedAt": "2019-01-27T14:18:02.608Z",
          "source": "web",
          "type": "前端",
          "url": "https://zhuanlan.zhihu.com/p/53599723",
          "used": true,
          "who": "bym"
        },
        {
          "_id": "5c4dbd2d9d21224326203318",
          "createdAt": "2019-01-27T14:16:13.365Z",
          "desc": "前端组件设计原则",
          "publishedAt": "2019-01-27T14:18:06.726Z",
          "source": "web",
          "type": "前端",
          "url": "https://juejin.im/post/5c49cff56fb9a049bd42a90f",
          "used": true,
          "who": "bym"
        },
        {
          "_id": "5c4fff459d212243283ecd13",
          "createdAt": "2019-01-29T07:22:45.27Z",
          "desc": " 正则全攻略使用手册",
          "publishedAt": "2019-01-29T07:23:03.67Z",
          "source": "web",
          "type": "前端",
          "url": "https://segmentfault.com/a/1190000018042746",
          "used": true,
          "who": "bym"
        },
        {
          "_id": "5c52fa699d212243205cc803",
          "createdAt": "2019-02-13T03:14:03.948Z",
          "desc": "一个漂亮的前端网站导航~",
          "publishedAt": "2019-02-13T03:14:10.219Z",
          "source": "web",
          "type": "前端",
          "url": "http://nav.web-hub.cn/",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c5489879d212243235e641c",
          "createdAt": "2019-02-01T18:01:43.288Z",
          "desc": "React 服务端渲染完美的解决方案",
          "publishedAt": "2019-02-11T08:07:16.702Z",
          "source": "web",
          "type": "前端",
          "url": "https://segmentfault.com/a/1190000017361781",
          "used": true,
          "who": "bym"
        },
        {
          "_id": "5c5c46d39d212243283ecd1b",
          "createdAt": "2019-02-13T03:12:23.79Z",
          "desc": "Bootstrap Table 表格插件，简单配置便可拥有强大的单选、多选、排序、分页，以及编辑、导出、过滤等等.",
          "publishedAt": "2019-02-13T03:13:00.278Z",
          "source": "web",
          "type": "前端",
          "url": "https://github.com/wenzhixin/bootstrap-table",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c612ce29d212243283ecd1f",
          "createdAt": "2019-02-11T08:05:54.928Z",
          "desc": "用 JavaScript 和 Emoji 做地址栏动画",
          "publishedAt": "2019-02-11T08:07:26.974Z",
          "source": "web",
          "type": "前端",
          "url": "https://juejin.im/post/5c49b822f265da6142743a87",
          "used": true,
          "who": "bym"
        },
        {
          "_id": "5c628ffe9d212243235e6428",
          "createdAt": "2019-02-12T09:21:02.679Z",
          "desc": "近一万字的ES6语法知识点补充",
          "publishedAt": "2019-02-12T09:21:51.624Z",
          "source": "web",
          "type": "前端",
          "url": "https://juejin.im/post/5c6234f16fb9a049a81fcca5",
          "used": true,
          "who": "bym"
        },
        {
          "_id": "5c6389999d2122132ba0cae4",
          "createdAt": "2019-02-13T03:06:01.229Z",
          "desc": "🦎一套代码运行多端，一端所见即多端所见,滴滴发布的跨端整体解决方案.",
          "images": [
            "http://img.gank.io/a7a104ee-6e5e-460e-9a31-d90d064ca7b6",
            "http://img.gank.io/bfa17787-8671-42c6-af89-240b60bc0165",
            "http://img.gank.io/26f08070-3fd7-4e2e-9607-966d3edada17",
            "http://img.gank.io/7ae3f909-ce15-40aa-989e-b5b2178d967d",
            "http://img.gank.io/5cd11a95-8aba-45d6-b9c1-b0d67fb500fc"
          ],
          "publishedAt": "2019-02-13T03:07:00.519Z",
          "source": "chrome",
          "type": "前端",
          "url": "https://github.com/didi/chameleon",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c6a16559d2122267ad2c501",
          "createdAt": "2019-02-18T02:20:05.182Z",
          "desc": "JavaScript是如何工作的：引擎，运行时和调用堆栈的概述！",
          "publishedAt": "2019-02-18T02:20:22.190Z",
          "source": "web",
          "type": "前端",
          "url": "https://segmentfault.com/a/1190000017352941",
          "used": true,
          "who": "bym"
        },
        {
          "_id": "5c6b73609d2122267ad2c508",
          "createdAt": "2019-02-19T03:09:20.469Z",
          "desc": "微信小程序开发资源汇总",
          "publishedAt": "2019-02-19T03:09:45.614Z",
          "source": "web",
          "type": "前端",
          "url": "https://github.com/justjavac/awesome-wechat-weapp?utm_source=gold_browser_extension",
          "used": true,
          "who": "bym"
        },
        {
          "_id": "5c6cbb659d2122267ad2c50d",
          "createdAt": "2019-02-20T02:28:53.811Z",
          "desc": "认识 Fetch API",
          "publishedAt": "2019-02-20T02:29:04.944Z",
          "source": "web",
          "type": "前端",
          "url": "https://zcfy.cc/article/understanding-the-fetch-api",
          "used": true,
          "who": "bym"
        },
        {
          "_id": "5c72b4db9d21225328ffbbcf",
          "createdAt": "2019-02-24T15:14:35.606Z",
          "desc": "2019最新个税计算器，PC、H5多端适配",
          "publishedAt": "2019-02-25T13:25:39.939Z",
          "source": "web",
          "type": "前端",
          "url": "https://github.com/YutHelloWorld/personal-income-tax-calculator",
          "used": true,
          "who": "bym"
        },
        {
          "_id": "5c73ecef9d212238e2f7c7dd",
          "createdAt": "2019-02-25T13:26:07.782Z",
          "desc": "Vue源码中的JS骚操作",
          "publishedAt": "2019-02-25T13:26:20.179Z",
          "source": "web",
          "type": "前端",
          "url": "https://juejin.im/post/5c73554cf265da2de33f2a32",
          "used": true,
          "who": "bym"
        }
      ],
      "拓展资源": [{
          "_id": "5a5570d8421aa9115b930657",
          "createdAt": "2018-01-10T09:48:08.708Z",
          "desc": "用Python爬取各Android市场应用下载量（3分钟学会）",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "拓展资源",
          "url": "https://mp.weixin.qq.com/s?__biz=MzIwMzYwMTk1NA==&mid=2247489179&idx=1&sn=4b99a633b1f4fc1804782c6e85faa5bf",
          "used": true,
          "who": "陈宇明"
        },
        {
          "_id": "5c2dcd159d212233034e2482",
          "createdAt": "2019-01-03T08:51:33.346Z",
          "desc": "状态管理探索篇——Scoped Model",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "chrome",
          "type": "拓展资源",
          "url": "https://www.colabug.com/4587631.html",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c2edcc59d21227592da3243",
          "createdAt": "2019-01-21T07:12:59.715Z",
          "desc": "漫画：30张图带你彻底理解红黑树",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "拓展资源",
          "url": "https://mp.weixin.qq.com/s/P6lNWTwkaxJmBIy1kkcm5g",
          "used": true,
          "who": "codeGoogler"
        },
        {
          "_id": "5c32aa5e9d21225b988591e5",
          "createdAt": "2019-01-16T05:10:06.92Z",
          "desc": "煮酒论英雄----全面讲解屏幕适配",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "拓展资源",
          "url": "https://mp.weixin.qq.com/s/4AjG5LO_gwFKOz5w59MkOg",
          "used": true,
          "who": "JavaBoyHW"
        },
        {
          "_id": "5c32dee79d21225b9b018704",
          "createdAt": "2019-01-16T05:10:15.574Z",
          "desc": "360插件化框架 RePlugin及demo实现",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "拓展资源",
          "url": "https://democome.com/replugin-classloader-hook",
          "used": true,
          "who": "yangpeng"
        },
        {
          "_id": "5c32df1a9d21225b925fa5bc",
          "createdAt": "2019-01-16T05:10:24.587Z",
          "desc": "react native 动态下发bundle，前后端实现",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "拓展资源",
          "url": "https://democome.com/react-native-android-spring-boot",
          "used": true,
          "who": "yangpeng"
        },
        {
          "_id": "5c32df599d21225b9b018705",
          "createdAt": "2019-01-16T05:10:37.140Z",
          "desc": "Android 利用contentprovider实现同步binder",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "拓展资源",
          "url": "https://democome.com/use-contentprovider-implements-binder",
          "used": true,
          "who": "yangpeng"
        },
        {
          "_id": "5c35915e9d212264d18bb25a",
          "createdAt": "2019-01-09T06:14:54.466Z",
          "desc": "一组匹配中国大陆手机号码的正则表达式",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "拓展资源",
          "url": "https://github.com/VincentSit/ChinaMobilePhoneNumberRegex",
          "used": true,
          "who": "番茄你个马铃薯"
        },
        {
          "_id": "5c3802029d212264d18bb260",
          "createdAt": "2019-01-16T05:11:33.25Z",
          "desc": "深入研究 Android 核心技术 之 JNI",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "拓展资源",
          "url": "https://mp.weixin.qq.com/s/8eyucFVmr0JExVorrPlPAg",
          "used": true,
          "who": "codeGoogler"
        },
        {
          "_id": "5c393e019d212264cbcc5bc7",
          "createdAt": "2019-01-21T07:16:41.899Z",
          "desc": "LayoutInflater源码分析",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "api",
          "type": "拓展资源",
          "url": "https://bboylin.github.io/2018/12/21/LayoutInflater源码分析/",
          "used": true,
          "who": "bboylin"
        },
        {
          "_id": "5c4139029d212264cbcc5bd2",
          "createdAt": "2019-01-21T07:15:59.733Z",
          "desc": "2019校招Android面试题解（算法篇）",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "拓展资源",
          "url": "https://mp.weixin.qq.com/s/zvs8a1Ff41u22ATpL7JsPQ",
          "used": true,
          "who": "codeGoogler"
        },
        {
          "_id": "5c5d9f479d212243205cc808",
          "createdAt": "2019-02-08T15:24:55.328Z",
          "desc": "你的 app 能活过 2019 吗？",
          "publishedAt": "2019-02-12T10:01:55.285Z",
          "source": "web",
          "type": "拓展资源",
          "url": "https://mp.weixin.qq.com/s/DWisxfpo7Vr_7_TlEki_AQ",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c6379fe9d21225dd7a417cd",
          "createdAt": "2019-02-13T02:45:47.561Z",
          "desc": "App启动页面优化",
          "publishedAt": "2019-02-13T02:45:59.691Z",
          "source": "web",
          "type": "拓展资源",
          "url": "https://juejin.im/post/5bf8f90a518825396d71ff2a",
          "used": true,
          "who": "lijinshanmx"
        }
      ],
      "瞎推荐": [{
          "_id": "5a614fc6421aa9115b930678",
          "createdAt": "2019-01-21T07:51:14.120Z",
          "desc": "12款堪称神器的 Chrome 插件",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "瞎推荐",
          "url": "https://mp.weixin.qq.com/s?__biz=MzIwMzYwMTk1NA==&mid=2247489341&idx=2&sn=f4c9ed88bbd724018e39e42fa1dc0fca",
          "used": true,
          "who": "陈宇明"
        },
        {
          "_id": "5c2db16e9d212204a1d33f4f",
          "createdAt": "2019-01-21T07:14:52.757Z",
          "desc": "又撸一年的代码！尽管我秃头还白发，我还是坚持了",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "瞎推荐",
          "url": "https://mp.weixin.qq.com/s/5Q7LJ_-AtWsw8p6gUgbGFg",
          "used": true,
          "who": "codeGoogler"
        },
        {
          "_id": "5c2eab309d21227597139cf0",
          "createdAt": "2019-01-21T07:15:09.80Z",
          "desc": "加密混淆，应用就安全了嘛？",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "瞎推荐",
          "url": "https://mp.weixin.qq.com/s/NVDeWbjIQsEB7iWbR9ZV4A",
          "used": true,
          "who": "JavaBoyHW"
        },
        {
          "_id": "5c2f2d9c9d2122759d3e5ff0",
          "createdAt": "2019-01-21T07:51:08.148Z",
          "desc": "深度特征压缩&协作智能的发展历史",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "瞎推荐",
          "url": "https://blog.csdn.net/dhsig552/article/details/85788671",
          "used": true,
          "who": "Hao"
        },
        {
          "_id": "5c3441029d212264d18bb255",
          "createdAt": "2019-01-16T05:06:58.593Z",
          "desc": "一款高质量的高质量gif图生成工具",
          "images": [
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze96x48bng30mw09y7b0",
            "https://ww1.sinaimg.cn/large/0073sXn7ly1fze96ziljwg31dc0l8qu2"
          ],
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "瞎推荐",
          "url": "https://github.com/faressoft/terminalizer",
          "used": true,
          "who": "Mr.Krabs"
        },
        {
          "_id": "5c3547f99d212264d4501d1d",
          "createdAt": "2019-01-16T05:10:46.371Z",
          "desc": "Gradle更小、更快构建APP的奇淫技巧",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "瞎推荐",
          "url": "https://mp.weixin.qq.com/s/WDap7bmM6gP7koIjEIwTtQ",
          "used": true,
          "who": "codeGoogler"
        },
        {
          "_id": "5c3592279d212264cbcc5bc0",
          "createdAt": "2019-01-16T05:10:57.664Z",
          "desc": "android产品研发过程中常用的技术，技巧，实践",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "瞎推荐",
          "url": "https://github.com/yipianfengye/androidProject",
          "used": true,
          "who": "番茄你个马铃薯"
        },
        {
          "_id": "5c3c130c9d212264d4501d29",
          "createdAt": "2019-01-21T07:14:10.748Z",
          "desc": "Flutter更新错误全面解决方案(图文+视频讲解)",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "瞎推荐",
          "url": "https://www.jianshu.com/p/eadc13a650c1",
          "used": true,
          "who": "阿韦"
        },
        {
          "_id": "5c41e20c9d212264d18bb26a",
          "createdAt": "2019-01-21T07:51:00.895Z",
          "desc": "Python实现的12306抢票工具",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "瞎推荐",
          "url": "https://github.com/versionzhang/python_12306",
          "used": true,
          "who": "versionzhang"
        },
        {
          "_id": "5c5f8fff9d212243205cc809",
          "createdAt": "2019-02-13T02:47:06.537Z",
          "desc": "管理多个git版本库的小工具，还可以在任意目录下执行git命令",
          "images": [
            "http://img.gank.io/6dacda24-7dd3-40f7-a07f-ece730080c73"
          ],
          "publishedAt": "2019-02-13T02:47:09.853Z",
          "source": "web",
          "type": "瞎推荐",
          "url": "https://github.com/nosarthur/gita",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c677f299d212226806fd413",
          "createdAt": "2019-02-16T03:10:33.466Z",
          "desc": "相对友好的红黑树",
          "publishedAt": "2019-02-18T05:56:51.324Z",
          "source": "web",
          "type": "瞎推荐",
          "url": "http://rkhcy.github.io/2019/02/14/Red_Black_Tree/",
          "used": true,
          "who": "lijinshanmx"
        }
      ],
      "福利": [{
          "_id": "5c4578db9d212264d4501d40",
          "createdAt": "2019-01-21T07:46:35.304Z",
          "desc": "2019-01-21",
          "publishedAt": "2019-01-21T00:00:00.0Z",
          "source": "web",
          "type": "福利",
          "url": "https://ws1.sinaimg.cn/large/0065oQSqgy1fze94uew3jj30qo10cdka.jpg",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c6385b39d21225dd7a417ce",
          "createdAt": "2019-02-13T02:49:23.946Z",
          "desc": "2019-02-13",
          "publishedAt": "2019-02-13T02:49:33.16Z",
          "source": "web",
          "type": "福利",
          "url": "https://ws1.sinaimg.cn/large/0065oQSqly1g04lsmmadlj31221vowz7.jpg",
          "used": true,
          "who": "lijinshanmx"
        },
        {
          "_id": "5c6a4ae99d212226776d3256",
          "createdAt": "2019-02-18T06:04:25.571Z",
          "desc": "2019-02-18",
          "publishedAt": "2019-02-18T06:05:41.975Z",
          "source": "web",
          "type": "福利",
          "url": "https://ws1.sinaimg.cn/large/0065oQSqly1g0ajj4h6ndj30sg11xdmj.jpg",
          "used": true,
          "who": "lijinshanmx"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
    //今日资源api
    wx.showLoading()
    apiService.todayData().then(function(res) {
      console.log(res)
      wx.hideLoading()
      if (!res.error) {
        that.setData({
          category: res.category,
          results: res.results,
          android: res.results.Android,
          images: res.results.福利
        })
      } else {
        console.log('请求错误')
      }
    }).catch(function(e) {
      wx.hideLoading()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  onTabsItemTap: function(event) {
    wx.previewImage({
      current: event.currentTarget.dataset.gid[0], // 当前显示图片的http链接
      urls: event.currentTarget.dataset.gid // 需要预览的图片http链接列表
    })
  },
  //banner大图 
  onBannerItemTap: function(event) {
    let index = event.currentTarget.id;
    let urls = this.data.images.map(function(item) {
      return item.url;
    });
    wx.previewImage({
      current: urls[index], // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
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

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

})