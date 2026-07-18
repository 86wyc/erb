//18 July,2026 (Sat)
//demo
// number+string=>string
// let x = 12;
// let y = "80";
// console.log(x+y);

//demo:what is the value of b when output is : "2150PRINT"
// let a = 2150; 
// let b = ?
// console.log(a + b);


//demo
// let z = [1, 2, 3, 5, 6, 7];
// let sum=0;
// for (i of z){
//     sum += i;//sum=sum+i
// }
// console.log("sum is ",sum);


//demo
// let z = [1, 2, 3, "5", 6, 7];// 6+"5"="65"+6="656"+7="6567"
// let sum=0;
// for (i of z){
//     sum += i;
// }
// console.log("sum is ",sum);



// let z = ["1", 2, 3];//sum=0+"1"="01"+2="012"+3="0123"
// let sum=0;
// for (i of z){
//     sum += i;
// }
// console.log("sum is ",sum);


//demo:write down the output. why they occrued if error.
// const fruit = ['apple', 'banana'];
//console.log(fruit[1][0]);//b
//console.log(fruit[1][2]);//n
// console.log(fruit[2][2]);//error occur, cannot found 3rd element
// console.log(fruit[0].substring(2,3));


// var i = 1;
// while (i <= 10) {
// console.log(i);
// i++;//i=i+1
// }

// var i = 1;
// while (i <= 10) {
//     console.log(i);
//     if (i == 7) {
//         break;
//         console.log("i",i);
//     } else {
//         i++;
//         continue;
//         console.log("i",i);//X
//     }
// }

//demofor-loop
// for (let i=1;i<11;i++){
//     console.log(i);
// }


//Q:1 3 5 7 9
// for (let i=1;i<11;i+=2){
//     console.log(i);
// }
// 1 3 5 7 9

//Q:2 4 6 8 10
// for (let i=2;i<11;i+=2){
//     console.log(i);
// }
//2 4 6 8 10

//Q:what is the value of d when output is : "102"
// let c = 202;
// let d = ?
// console.log(c + d);//-100




// //Q:write down the output. why they occrued if error.
//version1
// let d = 10;
// function funcD() {
//     d += -12;
//     console.log(d);
//     if (d<0){
//         d -=30;
//     }
// }
// console.log(d);
// funcD();
// console.log(d);



//Q:write down the output. why they occrued if error.
//version2
// let d = 10;
// function funcD() {
//     let d=0; // d is local varaible which NOT affect to outside function
//     d += -12;
//     console.log(d);
//     if (d<0){
//         d -=30;
//     }
// }
// console.log(d);
// funcD();
// console.log(d);



//Q:write down the output. why they occrued if error.
// const A = 100;
// var B = 200;
// if (B>10){
//     A = A+10;//Error occurs(1 mark) , Cannot assign value to constant variable. (1 mark)
// }
// console.log(B);




// Q:write down the output. why they occrued if error.
// const e = 10;
// function funcE() {
//     e += 1;//Error occurs (1 mark):Cannot assign value to constant variable.(1 mark) //發生錯誤：無法為常數變數賦值
// }
// funcE();


//Q4
// const s = 1;
// function fS(){
//     let s = 10;
//     s +=2;
//     console.log(s);//12
//     s -=10;//2
//     if (s %2 == 0){ s -= 2;}//2-2=0
//     console.log(s);//0
//     return 8;
// }
// console.log(s);//1
// console.log(fS() == 8);//true
// console.log(s);//1



//Q:write down the output. why they occrued if error.
// const aF = ['apple','banana','orange','32767'];
// for (elmt of aF){
//     if (elmt == 'banana'){
//        console.log('banana is here');
//     }
// }
// if (typeof aF[3][3] == 'number'){
//     console.log('yes');
// }



//Q:what is output in console ?
// let new_num = function pnum(n){
//     n += 10;
//     return 20;
// }
// console.log(new_num(8));


//Q:Arrow function
// function getnum(n){
//     console.log("The value of is ", n);
// }
// getnum=(n)=>{console.log("The value of is ", n);}
// getnum(10);

// function add(a, b) {
//     return a + b;
// }
// add=(a,b)=>{return a+b};
// console.log(add(1,2));

