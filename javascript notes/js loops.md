# loops in javascript:

- javascript supports diffrent kinds of loops.
- **for**: loops through a block of code a number of times.
- **for/in**: loops through the properties of an object.
- **for/of**: looops through the values of an iterbale object.
- **while**: loops through a block of code while a specified condition is true.
- **do/while**: also loops through a block of code while a specified conditions is true


### for statement:
- the **for** statement creates a loop with 3 optional expressions.

- syntax:
        for (expression1(variable), expression2(condition), expression3(increae/decrease)){

        }

- **expression1**: this is executed one time before the execution of the code block.
- **expression2**: it defines the condition for executing the code block.
- **expression3**: this is executed after the code block has been executed.

### for in loop.
- the javascript **forin** statement loops through the properties of an object.
- example:
- const person = {fname:"John", lname:"Doe", age:25};

  let text = "";

  for (let x in person) {

  text += person[x];
}

### for of loop:
- the javascript for of loop statement loops through the values of an iterable object.
- it lets you loop over iterable data structure such as arrays , strings, maps, nodelists.


### while loop:
- the while loop thorugh a block of code as long as specified condition is true.
- syntax:
- while (condition) {

  // code block to be executed

}
### do while loop :
the do while loop is a varient of the while loop. this loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
- syntax:
- do {

  // code block to be executed

}

while (condition);









 


  
