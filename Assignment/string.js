// concat two strings:

let greet = "Hello";
let time = "Morning";

let mes = greet.concat(" ", time);
console.log(mes);


// extract a substring:

let s = 'JavaScript';
let n = 4;
let res = s.substring(0, 5);
console.log(res);

// string length :

let string = 'frontend development';
console.log(string.length);


//check for a substring:

let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result);

//charecter at index:

let s1 = "Welcome to GeeksforGeeks";
let c = "G";
let index = s1.lastIndexOf(c);
console.log(index);


//reverse a string:

let s2 = "GeeksforGeeks";
const ans = s2.split('').reverse().join('');
console.log(ans);

//string to uppercase:

let string1 = "Hello World!";
let res1 = string1.toUpperCase();
console.log(res1);

//string to lowercase:

let string2 = "HELLO WORLD!";
let res2 = string1.toLowerCase();
console.log(res2);

// remove white spaces:

let str1 = " hello world   ";
let str2 = str1.trim();
console.log(str2);


//repeat a string:

let fruits = "apple,banana,cherry,sapota";
let str3 = fruits.repeat(3);
console.log(str3);


//palindrome :

function palindrome(str){
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

const inputstring = "mam";
console.log(palindrome(inputstring));


//cout words in sentence:

function countWords(sentence){
    const words = sentence.trim().split(/\s+/);
    return words.length;
}
const inputstring1 = "front end developer";
console.log(countWords(inputstring1));



//replace substring:

function replaceSubstrings(str, oldSubstring, newSubstring){
    return str.replace(oldSubstring, newSubstring);

}
const originalstring = "hello world Good morning";
const result1 = replaceSubstrings(originalstring, "Good","bad");
console.log(result1);


// longest word in a sentence:

function longest(str){
    str = str.split(" ")
    return str.sort((a,b) => b.length - a. length)[0]
}

console.log(longest("hello good morning"));


// check starts with:

function startsWithSubstring(str, substring) {
    return str.startsWith(substring);
}
const inputString = "Hello, world!";
const searchSubstring = "Hello";
console.log(startsWithSubstring(inputString, searchSubstring));


// ends with:

function endswithSubstring(str, substring){
    return str.endsWith(substring);
}
const inputstring2 = "hello world";
const searchSubstring1 = "world";
console.log(endswithSubstring(inputstring2,searchSubstring1));


// mask emial address:

// count vowels and strings:

function countVowelsAndConsonants(str) {

    const vowels = "aeiou";
    const sanitizedStr = str.toLowerCase().replace(/[^a-z]/g, "");
    let vowelCount = 0;
    let consonantCount = 0;
    for (const char of sanitizedStr) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }
    
    return { vowels: vowelCount, consonants: consonantCount };
}
const inputString3 = "Hello, World!";
const result3 = countVowelsAndConsonants(inputString3);
console.log(result3); 

// sort the string:

function sortCharactersAlphabetically(str) {
    return str.split('').sort().join('');
}

const inputString4 = "javascript";
const sortedString = sortCharactersAlphabetically(inputString4);
console.log(sortedString);