// function showMessage() {
//     alert('Hello World!');
// }
// console.log('Hello World!');



// var name = 'John';
// {
//     let name = 'Jane';
//     console.log(name); // Jane 
// }
// console.log(name); // John



// let mentor = 'Michael';
// const student = 'Jane';
// const pi = 3.14159;




// let data1 = 10;
// let data2 = 'hello';
// let data3 = true;
// let data4 = null;
// let data5;
// let data6 = 60;
// let data7 = 70;
// let data8 = 80;
// console.log(data1);
// console.log(data2);
// console.log(data3);
// console.log(data4);
// console.log(data5);

// console.log(typeof data1);
// console.log(typeof data2);
// console.log(typeof data3);
// console.log(typeof data4);
// console.log(typeof data5);


// let a = true;
// let b = false;
// console.log(a && b); // both must be true to return true
// console.log(a || b); // one must be true to return true
// console.log(!a); // returns opposite of the value




// let temp = 45;
// if (temp < 20) {
//     console.log('It is cold outside');
// }
// else if (temp >= 20 && temp <= 30) {
//     console.log('It is moderate outside');
// }
// else {
//     console.log('It is hot outside');
// }




// let bill = 192;
// if (bill < 100) {
//     console.log(5*bill);
// }
// else if (bill >= 100 && bill <= 200) {
//     console.log(5*100+7*(bill-100));
// }
// else {
//     console.log(5*100 + 7*(200-100) + 10*(bill-200));
// }





// let day = 'sun';
// switch (day) {
//     case 'sat':
//         console.log('Saturday');
//         break;
//     case 'sun':
//         console.log('Sunday');
//         break;
//     case 'mon':
//         console.log('Monday');
//         break;
//     case 'tue':
//         console.log('Tuesday');
//         break;
//     case 'wed':
//         console.log('Wednesday');
//         break;
//     case 'thu':
//         console.log('Thursday');
//         break;
//     case 'fri':
//         console.log('Friday');
//         break;
//     default:
//         console.log('Invalid day');
//         break;
// }




// for (let i = 0; i < 5; i++) {
//     console.log('This is ' + i);
// }




// for (let i = 0; i < 5; i++) {
//     console.log(`value of ${i} is ${i}`);
// }


// let count = 1;
// while (count <= 5) {
//     console.log(count);
//     count++;
// }




// do {
//     console.log(count);
//     count++;
// } while (count <= 5);




// function greet(name , name2) {
//     console.log('Hello ' + name + ' ' + name2 'Welcome to the world of JavaScript.');
// }
// greet('Divy');


// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 10));

// Function expression
// const greet = function(name) {
//     console.log('Hello ' + name);
// }
// greet('Divy');

// Arrow function
// const add = (a, b) => {
//     return a + b;
// }

// const add1 = (a, b) => a + b;

// console.log(add(5, 10));
// console.log(add1(5, 10));


// let data = 'Divy';
// function greet() {
//      let data = 'John';
//     console.log('Hello ' + data);
// }
// greet();
// console.log(data);



// function hello() {
//     let name = 'Divy';
//     function hi() {
//         console.log(name);
//     }
//     return hi;
// }
// let myFunc = hello();
// myFunc();




// This keyword
// const person = {
//     name: 'Divy',
//     age: 20,
//     greet: function() {
//         console.log('Hello ' + this.name);
//     }
// }
// person.greet();


// let divy = {
//     name: 'Divy',
//     age: 20,
//     university: 'Lovely Professional University',
//     data: {
//         city: 'Jalandhar',
//         country: 'India'
        
//     }
// }
// console.log(divy.name,age);



// let fruits = ['apple', 'banana', 'mango', 'orange'];
// console.log(fruits);
// console.log(fruits[0]);




// let student = ['Divy', 'John', 'Jane', 'Michael'];
// console.log(student);
// console.log(student.length);
// console.log(student[1]);
// student.push('Doe');
// console.log(student);
// student.pop();
// console.log(student);
// student.shift(); 
// console.log(student);
// student.unshift('Divy');
// console.log(student);
// student.splice(1, 1);
// console.log(student);
// student.unshift('Doe');
// console.log(student);
// student.splice(1, 0, 'John');
// console.log(student);
// student.splice(2, 1, 'Jane');
// console.log(student);
// student[2] = 'Tony'; 
// console.log(student);





// let even = [2, 4, 6, 8, 10];
// console.log(even.map(x => x * 2));
// console.log(even.filter(x => x > 5));
// console.log(even.reduce((acc, x) => acc + x, 0));




let numbers = [1, 2, 3, 4, 5, 6 ,7, 8 , 9 , 10];
// let even = numbers.filter(x => x % 2 == 0);
// console.log(even);
// let square = numbers.map(x => x * x);
// console.log(square);
// let sum = numbers.reduce((acc, x) => acc + x, 0);
// console.log(sum);

let sum = numbers.reduce((acc, x) => acc + x, 10);
console.log(sum);


