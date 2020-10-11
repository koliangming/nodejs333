let express = require('express');
let router = express.Router();
router.use(express.static('./public2')); // 把 public2 中的檔案全部丟上來
// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req, res) {
  res.send(
    '<body style="background-repeat: no-repeat; background-image: url(https://www.wangyetuku.com/d/file/2019/aa47052d8f3f500b540cc33e9742a23a.jpg);">'+
    '<h1 style="color: rgb(190, 251, 161)"> Galaxy(銀河系)，是我們太陽系的故鄉。 </h1>' +
    '<h2><a style="color: rgb(244, 250, 154)" href="/stars/Galaxy/about"> Detail (關於銀河系的詳細介紹)</a></h2>' +
    '<h2><a style="color: rgb(244, 250, 154)" href="/stars/Galaxy/classA.html"> Stars Discovery (探索星空中的天體) </a></h2></body>' 
  );
});

// define the about route
router.get('/about', function (req, res) {
  res.send(
    '<body style="background-repeat: no-repeat; background-image: url(https://www.wangyetuku.com/d/file/2019/aa47052d8f3f500b540cc33e9742a23a.jpg);">' + 
    '<h1 style="color: rgb(190, 251, 161)"> 銀河系(Galaxy) </h1>' +
    '<div style="color: yellow; width: 50%;">銀河星系（古稱銀河、天河、星河、天漢、銀漢等），是一個包含太陽系的棒旋星系。直徑介於100,000光年至180,000光年。大約擁有1,000億至4,000億顆恆星，並可能有1,000億顆行星。太陽系距離銀河中心約26,000光年，在有著濃密氣體和塵埃，被稱為獵戶臂的螺旋臂的內側邊緣。在太陽的位置，公轉週期大約是2億4,000萬年。從地球看，因為是從盤狀結構的內部向外觀看，因此銀河系呈現在天球上環繞一圈的帶狀。</div>' +
    '<h1 style="color: rgb(190, 251, 161)"> 暗物質(Dark matter) </h1>' +
    '<div style="color: yellow; width: 50%;">人們透過重力產生的效應得知，銀河系中有大量暗物質的存在。現代天文學經由重力透鏡、宇宙中大尺度結構的形成、微波背景輻射等方法和理論來探測暗物質。在很大距離範圍內的恆星和氣體都以每秒大約220公里的速度在軌道上繞著銀河中心運行。這種恆定的速度違反了克卜勒動力學，因而認為銀河系中有大量不會輻射或吸收電磁輻射的質量。這些質量被稱為暗物質。</div>' +
    '<br><br><img src="https://9.blog.xuite.net/9/3/d/e/235385341/blog_4387782/txt/318775605/8.jpg" width="40%">'+
    '<br><br><br><br><br><br><br><h3><a style="color: pink" href="/stars"> 回到星空頁(Back to the sky) </a></h3></body>'    
  );
});

module.exports = router;
