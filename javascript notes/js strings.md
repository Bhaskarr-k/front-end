# javascript string:
- string is nothing but the collection of charecters.
-  string declared insingle quotes and double quotes and thrible quotes.
- singla and double quotes single line statement and thrible quotes for multilines.
- string represented in paranthesis.
## string methods:
### Length:
- The length property returns the length of a string:
- ex: let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let length = text.length;
### charAt():
- The charAt() method returns the character at a specified index (position) in a string:
- ex: let text = "HELLO WORLD";
      let char = text.charAt(0);
### charCodeAt():
- The charCodeAt() method returns the code of the character at a specified index in a string:
- The method returns a UTF-16 code (an integer between 0 and 65535).
- ex: let text = "HELLO WORLD";
      let char = text.charCodeAt(0);
### at():
- ex:  Get the third letter of name:

      const name = "W3Schools";
      let letter = name.at(2);
### slice():
- slice() extracts a part of a string and returns the extracted part in a new string.
- The method takes 2 parameters: start position, and end position (end not included).
- ex: let text = "Apple, Banana, Kiwi";
      let part = text.slice(7, 13);
### substring():
- substring() is similar to slice().
- The difference is that start and end values less than 0 are treated as 0 in substring().
- ex: let str = "Apple, Banana, Kiwi";
      let part = str.substring(7, 13);
###  substr():
- substr() is similar to slice().
- The difference is that the second parameter specifies the length of the extracted part.

- Example:
        let str = "Apple, Banana, Kiwi";
        let part = str.substr(7, 6);
### toUpperCase():
- it s converting string to uppercase.
- ex: let text1 = "Hello World!";
      let text2 = text1.toUpperCase();
### toLowerCase():
- it is converting given string into lowercase.
- ex: let text1 = "Hello World!";       
      let text2 = text1.toLowerCase();

### concat()
- concat() joins two or more strings:

- Example:
         let text1 = "Hello";
         let text2 = "World";
         let text3 = text1.concat(" ", text2);
### trim:
- trim method removes space from frist and lost.
- ex: let text1 = "      Hello World!      ";
      let text2 = text1.trim();
### trimStart():
- The trimStart() method works like trim(), but removes whitespace only from the start of a string.
- Example:
         let text1 = "     Hello World!     ";
         let text2 = text1.trimStart();

### trimEnd():
- The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
- :Example:
          let text1 = "     Hello World!     ";
          let text2 = text1.trimEnd();

### padStart()
- The padStart() method pads a string from the start.
- It pads a string with another string (multiple times) until it reaches a given length.
- Examples:
- Pad a string with "0" until it reaches the length 4:

       let text = "5";
       let padded = text.padStart(4,"0");

### tring padEnd()
- The padEnd() method pads a string from the end.
- It pads a string with another string (multiple times) until it reaches a given length.
- Examples:
         let text = "5";
         let padded = text.padEnd(4,"0");

### repeat()
- The repeat() method returns a string with a number of copies of a string.
- The repeat() method returns a new string.
- The repeat() method does not change the original string.
- Examples
- Create copies of a text:

           let text = "Hello world!";
           let result = text.repeat(2);

### replace:
- The replace() method replaces a specified value with another value in a string:
- ex: let text = "Please visit Microsoft!";
      let newText = text.replace("Microsoft", "W3Schools");

### ReplaceAll():
- JavaScript introduced the string method replaceAll():
- Example:
       text = text.replaceAll("Cats","Dogs");
       text = text.replaceAll("cats","dogs");
### split:
- A string can be converted to an array with the split() method:
- Example
        text.split(",")    // Split on commas
        text.split(" ")    // Split on spaces
        text.split("|")    // Split on pipe

### 