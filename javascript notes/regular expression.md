# Regular expression?
- A regular expression is a special sequence of charecters that defines a search pattren typically used for pattren mathcing within text.
- it's often used for tasks such as validating email address and phone numbers or checking if a string contains certain pattrens
- in javascript Regex is an object that is used to create regular expressions. whicha re pattrens used to match charecter combinations in strings.
- we can define regulart expreesion in two ways that are given below.
            
            using the regex constructor

            using the regular expression literal
## Regular expreesion modifiers:
- it can be used to perform multiline searches which can also be set to case-sensitive matching.
  
      g---> find the charecter globally
      i--->find a charecter with case insesitive matching.
      m----> find multiline matching

## Regular expression brackets:
- it can be used to find the charecters in a specified string.

      [abc]-->find any of charecters inside the brackets

      [^abc]-->find any charecter not inside the brackets

      [0-9]--> find any of the digits between the brackets 0 to 9.

      [^0-9]--> find any digit not in between the brackets.

      [x/y]--> find any of the alternatives between x or y.

## Regular expreesion match charecters:
- these are charecters with a special meaning.

      \.-->search single charecters except line terminator or new line.
      
      \w-->find the word charecter  [A to Z pr a to z or 0-9]

      \d--> find a digit

      \D-->search non-digit

      \s-->find a white space charecter

      \S-->find the non ahite space charecter

      \b-->find a match at the begining or at hte end of a word

      \B-->find a match that is not present at he begining or end of a word.
      
      \0-->find the NULL charecter

      \n--> newline charecter

      \f--> find the form feed charecters

      \r--> find the carriage return charecter

      \t-->find the tab charecter

      \v-->find the vertical tab charecter

## Regular expressions quantifiers:
- these are used to define quantifiers

    +--> match any charecter min **o** and max **any** number

    *-->min **1** and **max** any number

    ?-->min **0** and max **1**

    {m}--> exactly **m** times

    {m,}--> min **m** times and max **any** number

    {m,n}--> min **m** times and **max** any number
## Regular expreesion object properties:
### global: 
- specify whether the ""g"" modifier is set or not
### ignorecase:
- specify whether the ""i"" modifier is set or not
### multiline:
- specify whether hte ""m"" modifire is set or not

## Regular expression object methods:
### compile:
- used to compile the regular expressions while executing of ecript
### exec:
- used to test for the matching in string
### test():
- used to test for a match in a string
### toString():
- return the string value of the regular expreesion
## capturing groups:
- capturing groups and backpreferences are powerfull concepts in javascript regular expreesions that allow you to match pattrens within strings and extract specifies parts if those for further
- these are portions of a regex pattren enclosed in paranthesis they allow to capture and extract substrings that matches the enclosed pattren

const regex = /(\d{2})-(\d{2})-(\d{4})/ 

const datestring = '13-12-2025';

const match = regex.exec(datestring)

console.log(match[1]);  // it will print 13

console.log(match[2]);  // it will print 12

console.log(match[3]);  // it will print 2025


- in the above progran we are use \d{2} it is allowed two digits and \d{4} it is allowed four digits
### Back preferences:
- these are allow you to refer back to previously captured groups with in the same regex pattren they are represented by "\" by the index of the capturing group

const regex = /(\w+)\s+1/;  

const str = 'hello hello';

console.log(regex.test(str));


- in the above program \w+ it is count the words and \s it is matches one or more whitespaces and \1 is a backreference to the first capturing group
