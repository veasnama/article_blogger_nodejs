const express = require("express")

const router = express.Router()



router.get("/articles", async (req, res) => {
    console.log("Why are you here?")
    res.send("Respone from article endpoint")
})
module.exports = router;
