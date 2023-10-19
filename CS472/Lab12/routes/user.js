const express = require("express");
const path = require("path");

const options = {
    "caseSensitive": false,
    "strict": true
}
const router = express.Router(options);

router.get("/users", function (req, res, next) {
    console.log("users get");
    res.status(200).sendFile(path.join(__dirname, "../public/views/user.html"));
})

router.post("/users", function (req, res, next) {
    console.log("users post");
    console.log(req.body);
    if (req.body) {
        res.status(200).sendFile(path.join(__dirname, "../public/views/success.html"));
    } else
        res.status(501).sendFile(path.join(__dirname, "../public/views/error.html"));
})

module.exports = router;