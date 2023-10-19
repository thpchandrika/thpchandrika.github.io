var fs = require('fs');

// fs.writeFileSync('./input.txt', 'Hello world'); // sync
// console.log('start');
// // let text = fs.readFileSync('./input.txt', "utf8");//sync
// fs.readFile('./input.txt', "utf8", (err, data) => {//async
//     console.log(data);
// });
// // console.log(text);
// console.log('end');
// // let content = `Data from input.txt ${text}`;


// console.log("Reading file...");
fs.writeFileSync('./output.txt', "hello world");//sync
fs.writeFile('./output.txt', "hello world", () => {//async
    console.log('file is written');
});