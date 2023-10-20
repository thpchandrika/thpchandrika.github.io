const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const studentRouter = require("./router/studentRouter");

app.use(express.json());

app.use('/students', studentRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ message: "Something went wrong: " + err.message });
})

app.listen(port, () => console.log(`Server started on port ${port}`));