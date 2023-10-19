const express = require('express');
const path = require("path")

const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);

router.get("/products", function (req, res, next) {
    console.log("products get");
    console.log(path.join(__dirname, "../public/views/product.html"));
    res.status(200).sendFile(path.join(__dirname, "../public/views/product.html"));
})

router.post("/products", function (req, res, next) {
    console.log("products post")
    console.log(req.body);
    if (req.body) {
        res.status(200).sendFile(path.join(__dirname, "../public/views/success.html"));
    } else
        res.status(501).sendFile(path.join(__dirname, "../public/views/error.html"));
})

module.exports = router;
