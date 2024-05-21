const fs = require("fs");
const os = require("os");
console.log(os.cpus().length);


//Sync..... Blocking.....
// fs.writeFileSync('./test.txt','Hello world');

//async  Non-Blocking
// fs.writeFile('./test.txt','Hello world Async',(err)=>{})

// const result = fs.readFileSync('./contacts.txt',"utf-8");
// console.log(result);

// fs.readFile('./contacts.txt',"utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err)
//     }else {
//         console.log(result);
//     }
// })

// fs.appendFileSync("./test.txt",`${Date.now()} Hey There\n`);
// fs.cpSync('./test.txt',"./copy.txt");

// fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./test.txt"));

// console.log("1");
// fs.readFile("contacts.txt","utf-8",(err,result)=>{
//     console.log(result);
// });
// console.log("2");
// console.log("3");
// console.log("4");


//default Thread Pool Size = 4
//Max? - 8core cpu - 8