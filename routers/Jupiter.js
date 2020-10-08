var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req, res) {
  res.send('<h1> Jupiter(木星) </h1>' +
    '<h2><a href="/stars/Jupiter/about">Detail(關於木星的詳細介紹)</a><h2>' +
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/450px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg" height="60%">'
  );
});

// define the about route
router.get('/about', function (req, res) {
  res.send(
    '<h1> Jupiter(木星) </h1>' +
    '<div style="width: 60%">木星是距離太陽第五近的行星，也是太陽系中體積最大的行星，目前已知有79顆衛星。木星是顆巨行星，質量是太陽的千分之一，但卻是太陽系其他行星質量總和的2.5倍。木星的主要成分是氫，但只佔十分之一分子數量的氦，卻佔了總質量的四分之一；它可能有岩石的核心和重元素，但是像其他的巨行星一樣，木星沒有可以明確界定的固體表面。由於快速地自轉，木星的外觀呈現扁球體（赤道附近有輕微但明顯可見的凸起）。外面的大氣層依緯度成不同的區與帶，在彼此的交界處有湍流和風暴作用著。最顯著的例子就是大紅斑，已知是在17世紀第一次被望遠鏡見到，持續至今未曾停歇過的巨大風暴。環繞著木星的還有微弱的行星環和強大的磁層，包括4顆1610年發現的伽利略衛星，至2019年12月已經發現79顆衛星。木衛三是其中最大的一顆，其直徑大於行星中的水星。</div>' +
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/NASA14135-Jupiter-GreatRedSpot-Shrinks-20140515.jpg/450px-NASA14135-Jupiter-GreatRedSpot-Shrinks-20140515.jpg" width="40%">'
  );
});

module.exports = router;
