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







function checkeven(n){
    if (n%2==0){
        //console.log(`The number ${n} is even`);
        return 'even';
    } else {
        return 'odd';
        //console.log(`The number ${n} is odd`);
    }
    //check no is even or odd
    //if even, display the number is even otherwise odd number.
}

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
  
//}
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
var x = 123;
console.log("Input: " + x);
try {
    if (typeof x === "string") {
        x = x.toUpperCase();
        console.log(x);
    } else {
        throw new Error("x is not a string");
    }
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Execution completed."); // This block always runs, regardless of success or error
}