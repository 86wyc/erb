/* define varA, output is 34  */
// let numQ = 5678;
// let varA = ?//-5644;
// console.log(numQ + varA);


//Can print the output "Finish" ? If not, explain it
// for (let i=1; i>=0; i++) {
//     console.log("hello");
//     if (i == 0) {
//         console.log("Finish");
//         break;
//     }
// }

//what down the number of "hello" ?
// for (let i=0; i>=0; i++) {
//     console.log("hello");
//     if (i == 8) {
//         break;
//     }
// }


//###############################################
// const functions = () => console.log("s");
// const calArrayAvg = function (inputArray) {
//     let sum = 0;
//     for (let m=0; m< inputArray.length; m++){
//     sum += inputArray[m];
//     }
//     return sum / inputArray.length;
// };
// const startFunc = function(){
//     console.log(calArrayAvg([10,20,"30",40,50]));
// };
// startFunc();


//###############################################
// let n = 0;
// while (true){
//     n = n + 4;
//     console.log("value of n =", n);
//     if (n==0){
//         continue;
//         console.log("continue");
//     } else if (n >=12) {
//         break;
//        console.log("break"); 
//     }
// }


//const arrayT = ["lmnopqr", "stuvwxy", "zabcdef"];
//console.log(arrayT[2]);
//console.log(arrayT[2][3]);
//console.log(arrayT[0].substring(1,3) + arrayT[2][3]);


// let numR = 23;
// function functionR(a,b)
// {
//     if (a<b){
//         return b;
//     }
//     return 15;
// }
// numR = numR + functionR(45,67)
// console.log(numR);


// Q:write down the output. why they occrued if error.
// const e = 10;
// function funcE() {
//     e += 1;
// }
// funcE();
//Error occurs:Cannot assign value to constant variable. //發生錯誤：無法為常數變數賦值

// const s = 1;
// function fS(){
//     let s = 10;
//     s +=5;
//     console.log(s);
//     s -=10;
//     if (s %3 == 0){ s -= 2;};
//     console.log(s);
//     return 8;
// }
// console.log(s);
// console.log(fS() == 10);
// console.log(s);

//Q:rewrite using Arrow function
// let new_num = function pnum(n){
//     n += 10;
//     return 20;
// }
// console.log(new_num(8));

// Answer:
// let new_num = (n)=>{
//     n += 10;
//     return 20;
// }
// console.log(new_num(8));


//***********************************************/
// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// app.use(express.json());


// mongoose.connect('mongodb://localhost:27018/userdb')
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

// import User from "./models/Users.js"


// app.get('/', async (req, res) => {
//     res.send('This is the home page');
// });

// app.post('/users', async (req, res) => {
//   const user = await User.create(req.body);
//   res.status(201).json(user);
// });

// app.get('/users', async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// app.get('/users/:id', async (req, res) => {
//   const user = await User.findById(req.params.id);
//   if (!user) return res.status(404).json({ error: 'Not found' });
//   res.json(user);
// });


// app.put('/users/:id', async (req, res) => {
//   const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   if (!user) return res.status(404).json({ error: 'Not found' });
//   res.json(user);
// });


// app.delete('/users/:id', async (req, res) => {
//   const user = await User.findByIdAndDelete(req.params.id);
//   if (!user) return res.status(404).json({ error: 'Not found' });
//   res.json({ message: 'Deleted' });
// });

// // Start server
// app.listen(8888, () => console.log('Server running on http://localhost:8888'));


//Q: List all API:
// app.post('/')
// app.post('/users')
// app.get('/users')
// app.get('/users/:id')
// app.put('/users/:id')
// app.delete('/users/:id')

//Q: Name 5 of the IDE
// Visual Studio Code
// Visual Studio
// PyCharm
// Eclipse
// Thonny
// Anaconda
// NetBeans
// Jupyter Notebook
// Android Studio
// Xcode


//what is the code editing functions of an IDE?
// 代碼提示
// 語法除錯
// 排位與格式

