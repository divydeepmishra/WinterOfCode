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




// let numbers = [1, 2, 3, 4, 5, 6 ,7, 8 , 9 , 10];
// let even = numbers.filter(x => x % 2 == 0);
// console.log(even);
// let square = numbers.map(x => x * x);
// console.log(square);
// let sum = numbers.reduce((acc, x) => acc + x, 0);
// console.log(sum);
// let sum = numbers.reduce((acc, x) => acc + x, 10);
// console.log(sum);
// numbers.forEach(x => console.log(x));


// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// let num3 = num1.concat(num2);
// console.log(num3);


// function findExample(arr) {
//     return arr.filter(x => x > 5);
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(findExample(numbers));


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let value = numbers.find(x => x > 5);
// console.log(value);


// let numbers = [1, 25, 34, 48, 58, 61, 70, 83, 9, 0];
// et value = numbers.sort((a, b) => a - b);
// console.log(value); // print in ascending order
// let value = numbers.sort((a, b) => b - a);
// console.log(value); // print in descending order



// objects
// let person = {
//     name: 'Divy',
//     age: 20,
//     location: 'Lovely Professional University',
//     data: {
//         city: 'Jalandhar',
//         country: 'India'
//     }
// }
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.data.city);
// console.log(person.data.country);
// person.age = 21;
// console.log(person.age);




// Object Methods Explanation
// function objectMethods(obj) {
//     console.log("Original Object:", obj);

//     let keys = Object.keys(obj);
//     console.log("After Object.keys():", keys);

//     let values = Object.values(obj);
//     console.log("After Object.values():", values);

//     let entries = Object.entries(obj);
//     console.log("After Object.entries():", entries);

//     let hasProp = obj.hasOwnProperty("property");
//     console.log("After hasOwnProperty():", hasProp);

//     let newObj = Object.assign({}, obj, { newProperty: "newValue" });
//     console.log("After Object.assign():", newObj);


//   }

//   // Example Usage for Object Methods
//   const sampleObject = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
//   };
//   objectMethods(sampleObject);


// let student = ['Divy', 'John', 'Jane', 'Michael'];
// let [first, second, third, fourth] = student;
// console.log(first);
// console.log(first,second);




// let book = {
//     title: 'JavaScript',
//     author: 'John Doe',
//     publisher: 'Pearson',
//     year: 2021,
// }
// let {title, author, publisher, year} = book;
// console.log(title);




// //spread operator
// let num1 = [1, 2, 3, 4, 5];
// let num2 = [6, 7, 8, 9, 10];
// let combined = [...num1, ...num2];
// console.log(combined);


//  let greet = "Hello";
// console.log([...greet]) // ["H", "e", "l", "l", "o"]





// // Parent class
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(`${this.name} is eating.`);
//     }
// }

// // Child class
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Calls the parent class constructor
//         this.breed = breed;
//     }

//     bark() {
//         console.log(`${this.name} is barking! Woof Woof!`);
//     }
// }

// // Usage example
// const myDog = new Dog("Buddy", "Golden Retriever");

// myDog.eat(); // Inherited from Animal class
// myDog.bark(); // Defined in Dog class

// console.log(`${myDog.name} is a ${myDog.breed}.`); // Accessing properties



// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = numbers.reverse();
// console.log(newArr);
// console.log(numbers);


// // Asynchronous JavaScript
// {
//     console.log("Hello World!");
//     console.log("Hello World!");
//     console.log("Hello World!");
//     console.log("Hello World!");
//     console.log("Hello World!");
//     console.log("Hello World!");
// }

// {
//     console.log("Hello World!");
//     console.log("Hello World!");
//     console.log("Hello World!");
//     console.log("Hello World!");
//     console.log("Hello World!");
//     console.log("Hello World!");
// }


// 



function meetShakil() {
    return new Promise((resolve, reject) => {
        let condition = "healthy"; // Change this to "emergency" or "health issue" to test different scenarios

        setTimeout(() => {
            if (condition === "healthy") {
                resolve("Meeting Shakil tomorrow!");
            } else if (condition === "health issue") {
                reject("Cannot meet Shakil due to my health issue.");
            } else (condition === "emergency") {
                reject("Cannot meet Shakil due to emergency work.");
            }
        }, 5000); // 5000 milliseconds delay
    });
}

meetShakil().then(message => {
    console.log(message);
    console.log("Meeting Shakil was successful!");
}).catch(error => {
    console.log(error);
});

    
