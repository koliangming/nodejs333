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
    'Galaxy\'s home page' + '<br>' +
    '<a href="/stars/Galaxy/about"> about </a>' + '<br>' +
    '<a href="/stars/Galaxy/classA.html"> classA </a>'
  );
});

// define the about route
router.get('/about', function (req, res) {
  res.send(
    '<h1> About Galaxy </h1>' +
    '\n <img src="https://www.natgeomedia.com/userfiles/sm/sm804_images_A1/9136/2019081242812053.jpg" height="60%">'
  );
});

module.exports = router;
