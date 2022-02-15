// // Named Function
// function sayHello(greeting, name ="World") {
//     return `${greeting} ${name}!`;
// }

// console.log(sayHello("Hi", "Kelly"));



// // Anonymous Function
// var add = function (num1, num2) {
//     return num1 + num2;
// };

// console.log(add(1, 3));



// // Arrow Function
// var multiply = (num1, num2) => {
//     return num1 * num2;
// };

// console.log(multiply(2, 5));

// var array = [1,2,3,4,5]

// function sum(array) {
//     let total = 0
//     for (var element of array) {
//         total += element 
//     }
//     return total
//     }
// console.log(sum(array));

// var myObj = {
//     name: "Kelly",
//     age: 31
// };

// var myStr = "name";
// var anotherStr = "string"

// var isKeyEqualStr = function (obj, str) {
//     for(var key in obj) {
//         if (key === str) {
//             return true
//         } else {
//             return false
//         }
//     }
// }

// console.log(isKeyEqualStr(myObj, myStr))
// console.log(isKeyEqualStr(myObj, anotherStr))


// function keyInObject(obj, key) {
//     return key in obj;
// }

// var obj = {
//     name: "kelly"
// };
// // Object.keys(obj) => ["name"]

// console.log(keyInObject(obj, "kelly"));



var multiply = (num1, num2) => num1 * num2;
console.log(multiply(2,5));

var sayHello = name => `Hello ${name}`;
console.log(sayHello("kelly"));