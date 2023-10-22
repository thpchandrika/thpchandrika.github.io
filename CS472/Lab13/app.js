const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const studentRouter = require("./router/studentRouter");

app.use(express.json());

const corsOptions = {
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"]
};
//app.use(cors()); //allow all origin
app.use(cors(corsOptions));

app.use('/students', studentRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ message: "Something went wrong: " + err.message });
})

app.listen(port, () => console.log(`Server started on port ${port}`));