const express = require("express");
const path = require("path");
const bookRouter = require("./router/bookRouter");
//instantiation
const app = express();

//configuration
app.enable("case sensitive routing");

app.use(express.static("./public"));

//routing
app.use("/books", bookRouter);

app.use('/file',(req,res,next)=>{
    res.status(404).sendFile("./view/404.html", { root: "./public" });    
});


// app.all('/',(req,res,next)=>{
//         console.log("1");
//         res.send();
//     });
//     // app.use=> /* 
//      app.use('/',(req,res,next)=>{
//         console.log("1");
//         next('route');
//     })

// app.get('/abc',(req,res,next)=>{
//     console.log("1");
//     next('route');
// },(req,res,next)=>{
//     console.log("2");
//     next();
// },(req,res,next)=>{
//     console.log("3");
//     res.send("last");
// })

// app.use((req,res,next)=>{
//     res.send("next('route') example");
// })


    

//error handling
// app.use(function (err, req, res, next)	{ 
//     console.log(err.message);
//     // next('err')
//     res.status(500).send(err.message);
// });

// app.use(function (err, req, res, next)	{ 
//     console.log(err.message);
//     res.status(500).send('Something broke!');
// });



//Bootup
app.listen(3000, ()=>{
    console.log('Your server is running on 3000');
})