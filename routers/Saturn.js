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
    '<body style="background-repeat: no-repeat; background-image: url(https://github.com/koliangming/nodejs333/blob/master/public/the-universe-saturn-planet-space-stars.jpg);">'+
    '<h1 style="color: rgb(190, 251, 161)"> Saturn(土星)，是太陽系中最多衛星的行星。 </h1>' +
    '<h2><a style="color: rgb(244, 250, 154)" href="/stars/Saturn/about"> Detail(關於土星的詳細介紹)</a></h2></body>' 
  );
});

// define the about route
router.get('/about', function (req, res) {
  res.send(
    '<body style="background-repeat: no-repeat; background-image: url(http://wallpapers4screen.com/Uploads/19-1-2016/3370/the-universe-saturn-planet-space-stars.jpg);">' + 
    '<h1 style="color: rgb(190, 251, 161)"> 土星(Saturn) </h1>' +
    '<div style="color: yellow; width: 50%;">為太陽系八大行星之一，至太陽距離（由近到遠）位於第六、體積則僅次於木星。並與木星同屬氣體（類木）巨星。土星主要由氫組成，還有少量的氦與微痕元素，內部的核心包括岩石和冰，外圍由數層金屬氫和氣體包覆著。最外層的大氣層在外觀上通常情況下都是平淡的，雖然有時會有長時間存在的特徵出現。土星的風速高達1,800公里/時，風速明顯比木星快。土星的行星磁場強度介於地球和更強的木星之間。土星有一個顯著的環系統，主要的成分是冰的微粒和較少數的岩石殘骸以及塵土。已經確認的土星的衛星有82顆，是八大行星中最多。</div>' +
    '<h1 style="color: rgb(190, 251, 161)"> 土星環(Ring of Saturn) </h1>' +
    '<div style="color: yellow; width: 50%;">使用簡單的現代望遠鏡或是品質精良的雙筒望遠鏡就可以看見土星環。它在赤道上從距離土星6 630 公里延伸至120 700 公里處，但平均的厚度大約只有20米，主要的成分93%是水冰和少量參雜在其中的複雜有機懸浮物托林，其餘7%是無定型的碳，它們的大小從塵土的斑點到一輛小汽車的大小都有。關於土星環的起源有兩種主要的理論。一種理論是在19世紀提出的起源於洛希極限，認為環原本是土星的一顆衛星，因為軌道的衰減而落入洛希極限的範圍內，因本身不夠緊密而被潮汐力扯碎（參見洛希極限），這種理論又演變出衛星被小行星或彗星撞擊而瓦解的學說。第二種理論認為它並非來自衛星，而是從形成土星的原星雲中直接形成的。</div>' +
    '<br><br><img src="https://s.yimg.com/uu/api/res/1.2/BI4HJjrhe8FWIKhJIgh95A--~B/aD0zNzg7dz02MDA7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/zh_hant_tw/News/bcc/4d00306a57_lly_20150522_1630.jpg">'+
    '<br><br><br><br><h3><a style="color: pink" href="/stars"> 回到星空頁(Back to the sky) </a></h3></body>'    
  );
});

module.exports = router;
