const express = require("express")

const router = express.Router()


router.get('/', async (req, res) => {
    console.log("home is render ")

    res.render('index', {
        title: 'Nodej is cool'
    });

})

module.exports = router;
