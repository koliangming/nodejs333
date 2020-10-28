let express = require('express');
let router = express.Router();
let Galaxy = require('./Galaxy.js');
// let Record = require('./Record.js');
let Jupiter = require('./Jupiter.js');
let Saturn = require('./Saturn.js');
router.use(express.static('./public'));
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/Galaxy', Galaxy);
// router.use('/Record', Record);
router.use('/Jupiter', Jupiter);
router.use('/Saturn', Saturn);

module.exports = router;