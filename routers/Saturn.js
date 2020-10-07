var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function (req, res) {
  res.send('<h1> Saturn(土星) </h1>' + '<br>' +
    '<a href="/stars/Saturn/about"> about Saturn</a>' + '<br>' +
    '<img src="https://i.ntdtv.com/assets/uploads/2019/10/1-155-800x450.jpg" height="100%">'
  );
});

// define the about route
router.get('/about', function (req, res) {
  res.send(
    '<h1> Saturn(土星) </h1>' + '<br>' +
    '土星，為太陽系八大行星之一，至太陽距離（由近到遠）位於第六、體積則僅次於木星。並與木星同屬氣體（類木）巨星。土星主要由氫組成，還有少量的氦與微痕元素[11]，內部的核心包括岩石和冰，外圍由數層金屬氫和氣體包覆著。最外層的大氣層在外觀上通常情況下都是平淡的，雖然有時會有長時間存在的特徵出現。土星的風速高達1,800公里/時，風速明顯比木星快。土星的行星磁場強度介於地球和更強的木星之間。土星有一個顯著的環系統，主要的成分是冰的微粒和較少數的岩石殘骸以及塵土。已經確認的土星的衛星有82顆，是八大行星中最多。' +
    '\n <img src="https://images.radio.com/wwjaam/Saturn.jpg?width=775&height=425&crop=4961,2728,x0,y283" height="60%">'
  );
});

module.exports = router;
