# Functions:
- funtions are one of the fundamentsl building blocks in javascript.
- A function in javascript to procedure a set of statements that perfomes a tsk or calculates a value.
- it should take some input and return an output where there is some obvious relationship between the input and output.
- function is nothing but block of code which performes a specific task whenver it is invoked.
- functions can be reusable.
## Defining functions:
### function declarations:
- A Function definition also called a function declaration, or function statement consists of the function keyword followed by
- the name of the function.
- a list of parameters to the function, elclosed in parenthesis ans seperated by commas.
- the javascript statements that define function, enclosed in curly braces, { /*....*/}
- for example the following code defines a function named **square**:

- function square(number) {

    return number * number;

}
- the function **square** takes one parameter called **number**. the function consist of one statement that says to return says to return the parameter of the function multiplied it self.
- the **return** statement specifies the value returned by the function, which is **number*number**.

- parameters are eesentially passed to functions **by value** so if the within the body a function assigns a completely new values to a parameter that was passed to the function **the change is not reflected globally or in the code which called that function**.
- when you pass an object as a parameter if hre function changes the objects properties that change is visible outside the function , as shown in the following example:

- function myfun(theObject):{

    theObject.make = "toyota";
}

- const myCar = {

    make: "Honda",

    model: "Accord",

    year: 1998,
};

- console.log(mycar.make);

  myFun(mycar);

  console.log(myCar.make);

