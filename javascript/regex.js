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
 


//const regex = /front/;
// const s1 = "frontend";
// const s2 = "front";
// console.log(regex.test(s1));
// console.log(regex.test(s2));     ---------------using string literal             


// const pattren = "hello\.";
// const regex = new RegExp(pattren);
// const s1 = "hello world";
// console.log(regex.test(s1));







// email

// function validateEmail(email) {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
// }

// console.log(validateEmail("test@example.com")); 
// console.log(validateEmail("bhasu75579@gmail.com"));
// console.log(validateEmail("bhasu75579gmail.com"));





// //phone number

// function validatephonenumber (phone) {
//     const phoneregex = /^[0-9]{10}$/;
//     return phoneregex.test(phone);
// }
// console.log(validatephonenumber("3453434612"));
// console.log(validatephonenumber("6453434612"));










//   password

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}


console.log(validatePassword("Pass1234")); 
