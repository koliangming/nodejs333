let express = require('express');
let app = express();
let port = process.env.PORT || 8888
let user_router = require('./routers/main_router.js')

app.get("/", (req, res) => {
    // res.send("This is main page.");
    res.send(
        '<h1> About the Sky(網址後接/stars看星空) </h1>' +
        '\n <img src="https://www.natgeomedia.com/userfiles/sm/sm804_images_A1/9136/2019081242812053.jpg" height="60%">'
    );
})

app.use("/stars", user_router)

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
});