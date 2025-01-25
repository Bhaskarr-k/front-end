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

  - when you pass an array parameter, if the function changes any of the arrays's values, that change is visible outside the function, as shown in the following example.
  - function myFun(theArr){

    the arr[0] = 30;

  }
  - const arr = [45];

    console.log(arr[0]);

    myFun(arr);

    console.log(arr[0]);

    ## function expressions:
    - while the function declaration above is syntatically a statement, functions can also be created by a function expression.
    - sunch a function can be **anonymous** it does not have any name 
    - for example the function **square** could have been defined as;
    - const square = function (number) {

        return number * number;
    };

    - console.log(square(4));
    - However a name can be provided with a function expression .providing a name allows the function to refer to itself and also makes it easier to identity the function in a debugger stack traces.
    - function expressions are convenient whrn passing a function as an argument to another function. the following example shows a **map** function that should recieve a function an first argument and an array as second argument.
    - function map(f,a){

        const result = new Array(a.length);

        for (let i=0; i<a.length; i++){

            result [i] f(a[i]);
        }

        return result;
    }

    ## calling functions:

    - defining a function does not execute it. defining it names the function the function and specifies what to do when the function is called.
    - calling the function actually performes the specified actions with the  indicated parameters. for example if you define the function **square** you could call it as followes.
    - square(5);
    - the precedding statemtn calls the function with an argument of **5** . the function executes its stament and returns the value **25**.
    ## function hoisting:
    - funciton hoisting only works with the functions declarations not with function expressions. the following code will work.
    - console.log(square(5));
    - initilization
    - const square = function (n) {

        return n*n;
    } 

    - this code run with out an error despite the **square** function being called before its declared.
    - this is because the javascript interpreter hoists the entire function declararion to the top of the current scope, so the code above as equivalent to;

    - console.log(square(5));

    - function square(n) {

        return n*n;
    }

    ## function parameters:
    - there are two special kinds of parameter 
    - default parameters
      rest parameters

    ### default parameters:

    - in javascript parameters of cuntions default to **undefined** however in some situations in might be useful to set a diffrent default value.
    - this is exactly what default parameters do.

    - in the past the general strategy for setting defualts was to test parameter values in the body of the function and assign a value if htey are **undefined**
    - in the follwing example if no value is provided for **b** its value would be **undefined** when evaluating **a*b** and a call to **multiply** would normally have returned **NaN** however this is prevented by the second line in this example.

    - function multiply(a,b) {

        b = typeof b !==="undefined" ? b:1

        return a*b
    }

    - console.log(multiply(5));
    - with default parameters, amanual check in the function body is no longer necesary. yo can put **1** as the default value for **b** in the function head.

    - function multiply(a, b = 1){

        return a*b;
    }
    - console. log(multiply(5));

    ## Rest parameters:

    - the rest parameters syntax allows to us to reprasent an indefinite numbe of argunments as an array.
    - in the following example the function **multiply** uses rest parameters to coolect arguments from the second one to the end. the function then multiplies by the sirst argument.

    - function multiply(multiplier,........theArgs) {

        return theArgs.map((x) => multiplier *x);

    }

    - const arr = multiply(2, 1, 2, 3);
    - console.log(arr);

    ## Arrow functions:

    - An arrow fucntions expression also called a fat arrow to distinguish from a hypothetical -> syntax in future javascript.
    - has a shorter syntax compared to function expressions and does not have its own **this**, **arguments**,**super** or **new**, **target** .
    - arrow functions are always anonymous.
    - two factores influenced the introduction of arrow functions: shorter functions and non binding of **this** 
