// sayHello(); 

// function sayHello() {
//     console.log("Hello");
// }

// // default parameters
// function greet(user = "Guest") {
//     console.log(`Hello, ${user}`);
// }

// spread  
// copying array
// let a=[1,2,3];
// let b=[...a];
// console.log(b);
// merging array

// let a =[1,2,3];
// let b= [4,5,6]
// let c =[...a,...b]
// console.log(c)

// array destructuring
// const colors = ['red','green','yellow']
// const [first, second] = colors;
// const [,,third] = colors

// console.log(first);
// console.log(second);
// console.log(third);

// map
// const numbers = [1,2,3];
// const doubled = numbers.map(num => num*2);
// console.log(doubled);

// extracting property from objects
// const users = [
//     { name: "Bhaskar", age: 25 },
//     { name: "Anu", age: 22 }
//   ];
  
//   const names = users.map(user => user.name);
  
//   console.log(names); 


// remove duplicates from an array
// const nums = [1,2,2,2,3,4,5]
// const unique = [...new Set(nums)];
// console.log(unique)

// const users = [
//     {name: "bhaskar", age: 25},
//     {name: "basu", age: 14},
//     {name: 'siva', age: 23}
// ]
// const adults = users.filter(user => user.age >= 18);
// console.log(adults);

// const person = {
//     name: "Bhaskar",
//     age: 25,
//     greet: function() {
//       console.log("Hello!");
//     }
// };
// person.greet()

// generator example
// function* generatorFunction() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
  
//   const gen = generatorFunction();
  
//   console.log(gen.next()); 
//   console.log(gen.next()); 
//   console.log(gen.next()); 
//   console.log(gen.next()); 
  
