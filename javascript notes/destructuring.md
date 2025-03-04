# Destructuring in javascript?
- Allow you to extract values from **arrays** or **objects** and assign them to **variables** using a concise syntax.
- its a convenient way to extract specific data from complex data structires and simplify your code.
- Destructuring is a powerful feature its widely used in modren javascript frameworks and libraries such as react and vue.js to extract props and state variables.


const myarray = [1,2,3];

const [a,b,c] = myarray;

console.log(a);

console.log(b);

console.log(c);

## Destructuring objects:

const myobj = {name:"bhaskar", course:"pyfs"};

const {name, age} = myobj;

console.log(course);

console.log(course)
