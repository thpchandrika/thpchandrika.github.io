const express = require("express");
const productRouter = require('./routes/product');
const userRouter = require("./routes/user");
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static("./public"));

app.use(productRouter);
app.use(userRouter);

app.use(function (err, req, res, next) {
    res.status(500).send('Something broke!');
});

app.listen(3005, () => {
    console.log("My first server using express is running on port 3001");
})