let express = require('express');
let router = express.Router();
router.use(express.static('./public')); // 把 public 中的檔案全部丟上來
// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req, res) {
  res.send(
    '<h1> Galaxy(銀河系) </h1>' +
    '<h2><a href="/stars/Galaxy/about"> Detail(關於銀河系的詳細介紹) </a></h2>' +
    '<h2><a href="/stars/Galaxy/classA.html"> Stars Discovery(探索你發現的星體) </a></h2>' +
    '<img src="https://www.natgeomedia.com/userfiles/sm/sm804_images_A1/9136/2019081242812053.jpg" height="60%">'
  );
});

// define the about route
router.get('/about', function (req, res) {
  res.send(
    '<h1> Stars in the Galaxy </h1>' +
    '<div style="width: 60%">銀河星系（古稱銀河、天河、星河、天漢、銀漢等），是一個包含太陽系的棒旋星系。直徑介於100,000光年至180,000光年。大約擁有1,000億至4,000億顆恆星，並可能有1,000億顆行星。太陽系距離銀河中心約26,000光年，在有著濃密氣體和塵埃，被稱為獵戶臂的螺旋臂的內側邊緣。在太陽的位置，公轉週期大約是2億4,000萬年。從地球看，因為是從盤狀結構的內部向外觀看，因此銀河系呈現在天球上環繞一圈的帶狀。</div>' +
    '\n <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/ESO_-_Milky_Way.jpg/1238px-ESO_-_Milky_Way.jpg" height="60%">'
  );
});

module.exports = router;
