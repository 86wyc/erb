//15June,2026

// Repetitive typing
// const username = user.username;
// const email = user.email;
// const city = user.profile.city;
// console.log(username);
// console.log(email);
// console.log(city);

// Use destructring
const user = {
  id: 101,
  username: "coder_janes",
  email: "jane@example.com",
  profile: { age: 28, city: "Boston" }
};

const { username, email, profile: { city } } = user;
console.log(username); // "coder_janes"
console.log(city);     // "Boston" (Nested destructuring)




// function simple(){
// return 1;
// }
// simple =()=> {
//   console.log('abc');
//   return 1;
// };
// console.log(simple());

// 1. simple(){return 1;}
// 2. simple =()=>{return 1;}
// 3. simple =()=> 1;

// var url = require('url');
// var adr = 'https://www.google.com/search?client=firefox-b-d&q=node.js';
// var p = url.parse(adr, true);
// console.log(p.query, p.host, p.pathname);


// const fs = require('fs');
// console.log('1. Starting async read...');
// fs.readFile('helloworld.js', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('2. File contents:', data);
// });
// console.log('3. Done starting read operation');

// var fs = require('fs');
// fs.writeFile('myfile.txt', 'Nodejs is fun!', function (err) {
//   if (err) throw err;
//   console.log('File saved');});


// var fs = require('fs');
// fs.rename('myfile.txt', 'yourfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File renamed');}); 

// var fs = require('fs');
// fs.appendFile('yourfile.txt','This is the appended content.\n',(err)=>{
//   if (err) {
//     console.error('Error appending data:', err);
//     return;
//   }
//   console.log('Data successfully appended.');
// }); 

// var fs = require('fs');
// fs.unlink('yourfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted');});

// var http = require('http');
// http.createServer(function (req, res) {
//     res.write('Mary!!!');
//     res.end();
// }).listen(8888);


//rest parameter exercise
// function add2(...num) {
// console.log(Math.max(...num));
// console.log('...num',...num);
// console.log('num',num);
// };
// add2(10, 20, 30, 40, 50); 

//exercise - sum all numbers using rest parameter
// function add1(...num) {
// let sum = 0
// for (let i = 0; i < num.length; i++) {
// 	if (Array.isArray(num[i])){
// 		let jj = num[i];
// 		for (let j=0; j<jj.length; j++){
// 			sum += jj[j];
// 		}
// 	} else {
// 		sum += num[i];
// 	}
// }
// console.log(sum);
// };
// add1(10, 20, 30, [2,3,5], 40, 50); 



//12June,2026
// 函數名稱
// 必須以字母（a-z，A-Z）、底線 _ 或符號 $ 開頭 ，不能以數字開頭
// 避免使用空格、連字符(-)、句號(.) 或其他內建保留字(例如: if, for..)
// 區分大小寫：
//       例如: myFunction 和 MyFunction 會被視為兩個      
//       完全不同的函數

function greeting(name, msg){
    //console.log("Hello " + name + " " + msg);
    //return "Hello " + name + " " + msg;
    return `Hello ${name} , ${msg}`;

}

// greeting("Peter", "Good morning");
//var msg1 = greeting("Peter", "Good morning");
//console.log(msg1);







// function checkeven(n){
//     if (n%2==0){
//         //console.log(`The number ${n} is even`);
//         return 'even';
//     } else {
//         return 'odd';
//         //console.log(`The number ${n} is odd`);
//     }
//     //check no is even or odd
//     //if even, display the number is even otherwise odd number.
// }
//checkeven(10);
// console.log(`The number is ${checkeven(10)}`);




// function withdraw(amt){
//     var balance = 1000;
//     if (balance>=amt){
//         balance = balance - amt;
//         return [true, balance];
//     } else {
//         return [false,balance];
//     }
// }

// var amount=1200;
// var result = withdraw(amount);
// if (result[0]){
//     console.log(`Success to withdraw $${amount}, your balance is $${result[1]}`);
// } else {
//     console.log(`Failed to withdraw $${amount}, your balance is only $${result[1]}`); 
// }
// display the it is success or failed to withdraw and display the balance




// var arr = [2,3,4,5,6];
// function checkeven(item){
//     var newarr=[];
//     //check if even, add it to the newarr, hint 
//     // step1: for of to loop the array
//     for (a of item){
//         //console.log(a);
//         if (a%2==0){
//             newarr.push(a);
//         }
//         // check if it is even , then add into newarr
//     }
//     return newarr;
// }
// console.log(`The even number is : ${checkeven(arr)}`);



// function add(a,b){
//     //console.log(a*b);
//     return (a*b); 
// }
// var result = add(2,3);
// console.log(result);


// function arrayify(obj) {
//     var array = [];
//     for (i in obj) {
//         console.log(i, obj[i]);
//         //array.push(obj[i]);
        
//     }
//     return array;
// }
// var dog1 = { name: "Marley", gender : "Male", age : 2, breed : "Labrador retriever"}
// var dog2 = { name: "Chu Chu", gender : "Female", age : 3, breed : "Chiwawa"}
// var dog3 = { name: "WowWow", gender : "Male", age : 4, breed : "Boxer"}
// arrayify(dog1);
//console.log(arrayify(dog1));
//console.log(arrayify(dog2));
//console.log(arrayify(dog3));


// function countdown(x) {
// if (x > 0){
// console.log(x);
// countdown(x-1);
// }}
// countdown(8);


// var date1 = new Date();
// date1.setFullYear(2018); //
// console.log(date1);
// date1.getFullYear(); // 2021


// var date1 = new Date();
// // date1.setDate(date1.getDate()+1);
// // console.log(date1);

// console.log(date1.toISOString());
// console.log(date1.getTime());

// let day;
// let months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];


// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     day = "Invalid day"; // Handles unexpected values
// }
// console.log(`Today is ${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getFullYear()} on ${ day }.`);

// var today = new Date();
// console.log("UTC String", today.toUTCString());


// function age(bd){
//     let today = new Date();
//     let birthdate = new Date(bd);
//     let age = today.getFullYear() - birthdate.getFullYear()
//     let monthdiff = today.getMonth() - birthdate.getMonth();
//     //console.log(today.getMonth(), birthdate.getMonth());
//     if (monthdiff < 0 || (monthdiff == 0 && today.getDate() < birthdate.getDate()) ){
//         //console.log(today.getDate(), birthdate.getDate());
//         age--;
//     }
//     return age;
// }
// console.log(`Age is ${ age('1996-6-11') }`);


// const numbers = [65, 44, 12, 4]
// numbers.forEach(myFunction)
// function myFunction(item, index, arr) {
//   arr[index] = item * 10
//   //console.log(item,index,arr);
// }
// console.log(numbers);

// const numbers2 = [65, 44, 12, 4];
// const newArr = numbers2.map(myFunction2)
// function myFunction2(num) {
//   return num * 10;
// }
// console.log(newArr, numbers2);

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result, ages);


//final versionZ
// var x = 123;
// console.log("Input: " + x);
// try {
//     if (typeof x === "string") {
//         x = x.toUpperCase();
//         console.log(x);
//     } else {
//         throw new Error("x is not a string");
//     }
// } catch (error) {
//     console.error("An error occurred:", error.message);
// } finally {
//     console.log("Execution completed."); // This block always runs, regardless of success or error
// }
//example1
// var x = [
// {name:"Sam",age:27},
// {name:"Mary",age:23},
// {name:"Peter",age : 34}];
// x.forEach(function (student, index) {
//   console.log(`${student.name}'s age ${student.age} is at position ${index}`);
// });
// //example2
// var ary = [1, 2, {c: 3, d: 4, e: 5}];
// ary.forEach(item => {
//   if (typeof item === 'object' && item !== null) {
//     // Loop through the keys of the object
//     for (let key in item) {
//       console.log(`${key} : ${item[key]}`);
//     }
//   } else {
//     // Print the simple values (1 and 2)
//     console.log(item);
//   }
// });

// function stat(a,b,c,d,e){
//     console.log("Max : " + Math.max(a,b,c,d,e));
//     console.log("Min : " + Math.min(a,b,c,d,e));
//     var array1 = [a,b,c,d,e];
//     console.log("Mean : " + ((a+b+c+d+e) / array1.length));
//     array1.sort(function(a,b){return a-b});
//     console.log("Median : " + (array1[array1.length/2-0.5]));}
// stat(5,7,3,9,21);


// function validateForm(formData) {
//     function validateEmail(email) {
//         return email.includes("@");
//     }
//     function validatePassword(password) {
//         return password.length >= 6;
//     }
//     return validateEmail(formData.email) && validatePassword(formData.password);
// }
// const result = validateForm({ email: "user@example.com", password: "secret" });
// console.log("Form valid?", result);

// function calculate(a, b) {
//     function add() {
//         return a + b;
//     }
//     function multiply() {
//         return a * b;
//     }
//     return {
//         sum: add(),
//         product: multiply()
//     };
// }
// console.log(calculate(3, 4)); // { sum: 7, product: 12 }


// function getAverage(name, ...assignment){
//   let avgmark=0;
//   for (i of assignment){    
//     avgmark += i;
//   }
//   return console.log(name + ' total mark : ' + avgmark);
// }
// getAverage('Peter', 10,20,30,60,80);//getAverage('Peter\'s average mark', 10,20,30);
// getAverage('Mary', 50,20,30);



