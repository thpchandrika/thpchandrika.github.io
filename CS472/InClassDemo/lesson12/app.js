const express = require("express");
const path = require("path");
//instantiation
const app = express();

//configuration
app.enable("case sensitive routing");


// Middlewares

//built-in 
// app.use(express.urlencoded({extended:false}));
app.use(express.static("./public"));


//application level 

app.get('/users',(req,res, next)=>{
    let msg = req.url +" "+ req.method;
    res.send(msg);
})

app.post('/users',(req,res, next)=>{
    let msg = req.url +" "+ req.method;
    res.send(msg);
})

app.delete('/users',(req,res, next)=>{
    let msg = req.url +" "+ req.method;
    res.send(msg);
})

app.put('/users',(req,res, next)=>{
    let msg = req.url +" "+ req.method;
    res.send(msg);
})

// app.use((req,res,next)=>{
//     console.log('1');
// //    res.send("1")
// next()
// })

// app.use=>   /users/*
//app.all=>  /users
// app.all('/users', (req,res,next)=>{
//     console.log('2');
//     res.send("users entered");
// })


// app.use((req,res,next)=>{
//     console.log('1');
//     next()
// })
// app.use((req,res,next)=>{
//     console.log('2');
//     next()
// })

app.use('/file',(req,res,next)=>{    
    // res.status(404).sendFile(path.join(path.join(__dirname, "/public/view/404.html")));
    res.status(404).sendFile("./view/404.html", { root: "./public" }); 
})

// app.use('/users',express.urlencoded({extended:false}), (req,res,next)=>{
//     console.log(req.body);
//     res.redirect("/view/index.html");
//     // res.send(req.body);
// })
// app.use('/products',express.json(), (req,res,next)=>{
//     console.log(req.body);
//     res.send(req.body);
// })

// app.use('/search',(req, res,next)=>{
//     console.log(req.query)
//     res.write("hello");
//     res.write("world");
//     res.end();
// })

// app.use('/json',(req, res,next)=>{
//     console.log(req.query)
//     let obj = {x:1,y:3};//["hello","world"]
//     res.json(obj);
// })
// app.use('/api/:id/:name/:city',(req,res,next)=>{
//     console.log(req.params);
//     console.log(req.query);
//     res.status(200);
//     res.send(200,req.params);
// })
// app.use('/abc',(req,res,next)=>{
//     console.log("1");
//     next();
// },(req,res,next)=>{
//     console.log("2");
//     next();
// },(req,res,next)=>{
//     console.log("3");
//     res.send("last");
// })

// app.use((req,res,next)=>{
//     console.log('4');
//     res.send("4");
// })

//Bootup
app.listen(3000, ()=>{
    console.log('Your server is running on 3000');
})