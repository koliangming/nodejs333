var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req, res) {
  res.send(
    '<body style="background-repeat: no-repeat; background-image: url(https://a-static.besthdwallpaper.com/mu-xing-qiangzhi-tw-1920x1080-2637_48.jpg);">'+
    '<h1 style="color: blue"> Jupiter(木星)，是太陽系中最大的行星。 </h1>' +
    '<h2><a style="color: yellow" href="/stars/Jupiter/about"> Detail(關於木星的詳細介紹)</a></h2></body>' 
    );
});

// define the about route
router.get('/about', function (req, res) {
  res.send(
    '<body style="background-repeat: no-repeat; background-image: url(https://a-static.besthdwallpaper.com/mu-xing-qiangzhi-tw-1920x1080-2637_48.jpg);">' + 
    '<h1 style="color: rgb(190, 251, 161)"> 木星(Jupiter) </h1>' +
    '<div style="color: blue; width: 50%;">是距離太陽第五近的行星，也是太陽系中體積最大的行星，目前已知有79顆衛星。木星是顆巨行星，質量是太陽的千分之一，但卻是太陽系其他行星質量總和的2.5倍。木星的主要成分是氫，但只佔十分之一分子數量的氦，卻佔了總質量的四分之一；它可能有岩石的核心和重元素，但是像其他的巨行星一樣，木星沒有可以明確界定的固體表面。由於快速地自轉，木星的外觀呈現扁球體（赤道附近有輕微但明顯可見的凸起）。外面的大氣層依緯度成不同的區與帶，在彼此的交界處有湍流和風暴作用著。最顯著的例子就是大紅斑，已知是在17世紀第一次被望遠鏡見到，持續至今未曾停歇過的巨大風暴。環繞著木星的還有微弱的行星環和強大的磁層，包括4顆1610年發現的伽利略衛星，至2019年12月已經發現79顆衛星。木衛三是其中最大的一顆，其直徑大於行星中的水星。</div>' +
    '<h1 style="color: rgb(190, 251, 161)"> 大氣層(Atmosphere) </h1>' +
    '<div style="color: blue; width: 50%;">木星有著太陽系內最大的行星大氣層，跨越的高度超過5,000 km（3,107 mi）。由於木星沒有固體的表面，它的大氣層基礎通常被認為是大氣壓力等於1 MPa（10 bar），或十倍於地球表面壓力之處。</div>' +
    '<h1 style="color: rgb(190, 251, 161)"> 大紅斑(Great Red Spot) </h1>' +
    '<div style="color: blue; width: 50%;">木星最著名的特徵是大紅斑，這是比地球大的一個持久性反氣旋風暴，位置在赤道南方22°，至少在1831年以來，就已經知道它的存在，並且可能更提早至1665年。來自哈伯太空望遠鏡的影像顯示多達兩個紅斑毗鄰著大紅斑。這個風暴大得可以使用地基的小口徑12cm或更大的望遠鏡看見。一些數學模型表明這個風暴是穩定的，可能是這顆行星上一個永久性的特徵。</div>' +
    '<br><br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/NASA14135-Jupiter-GreatRedSpot-Shrinks-20140515.jpg/450px-NASA14135-Jupiter-GreatRedSpot-Shrinks-20140515.jpg">' +
    '<br><br><br><br><br><br><h3><a style="color: pink" href="/stars"> 回到星空頁(Back to the sky) </a></h3></body>'    
  );
});

module.exports = router;
