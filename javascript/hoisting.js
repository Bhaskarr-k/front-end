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
const users = [
    { name: "Bhaskar", age: 25 },
    { name: "Anu", age: 22 }
  ];
  
  const names = users.map(user => user.name);
  
  console.log(names); 


