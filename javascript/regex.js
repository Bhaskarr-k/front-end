// regular expresion is a special sequence of charecters that defines a search pattren typically used for pattrenamtching with in text . often it is used for validating email address and phone numbers

// regular expression use in two Ways

// res=/pattren/

// res = new reg

// const patt = /script/i;
// const s1 = "bhaskar javascript learner";
// const s2 = "script"

// console.log(patt.test(s1));
// console.log(patt.test(s2))


// const regex = /java/i;
// const s1 = "javascript";
// const s2 = "java";
// console.log(regex.test(s1));
// console.log(regex.test(s2));             ---------using i flag


// const pattren = /"hello"/g;
// const regex = new RegExp(pattren);
// const s = "hello world";
// console.log(regex.test(s));            ------------using regex
 


// const regex = /front/;
// const s1 = "frontend";
// const s2 = "front";
// console.log(regex.test(s1));
// console.log(regex.test(s2));     ---------------using string literal             


const pattren = "hello\.";
const regex = new RegExp(pattren);
const s1 = "hello world";
console.log(regex.test(s1));