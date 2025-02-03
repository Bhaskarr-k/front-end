# Arroe functions?
- An Arrow function is a shorter syntax for writing functions in javascript.
- Arrow functions allow use for a more concise and readble code, especially in cases of small functions.
- unlike regular expressions and arrow functions dont have their own this, but instead inherit it from the surronding context.
- Arrow function are written with the **=>** symbol, which makes them compact.
- they dont hace their own **this** they inherit this from the surrronding context.
- Arrow functions do not have access to the arguments object, which ic availble in regular functions.
### example:
- const add = (a,b) => a+b;

  console.log(add(5,3));

## Arrow functions without parameters:
- An Arrow function without parameters is defined using empty parentheses (). this is useful when you need a function that doesnt require any arguments.
- **example**:
- const gfg = () => {

    console.log("hi bhaskar");
}

gfg;

## Arrow functions with single parameters
- if your arrow functions has a single parameter. you can omit the parentheses around it.
- const square = x => x*x;

  console.log(square(4));

## Arrow functions with multiple parameters:
- Arrow functions with multiple parameters like(param1,param2) => {} simplify writing concise function expressions in javascript useful for functions more than one argument.
- **example**:
- const gfg = (x,y,z) => {

    console.log(x+y+z)
}

- gfg (10,20,30);