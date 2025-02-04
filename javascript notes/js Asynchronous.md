# Asynchronous in javascript?
- Asynchronous javascript is a programing language approach that enables the non- execution of tasks, allowing concurrrent operations, improved responsiveness and efficient handling of time-consuming operations in web applications.
- javascript is a single-threaded and synchronous language.
## synchronous:
- this code is executed in order one at a time(first completing one then ot goes to next) but javascript may appear to be ascynchronous in some situations.
## using callback:
- callbacks are functions passed as arguments to be executed after an asynchronous operation completes.
- they are used in asynchronous javascript to handle responess and ensure non-blocking execution.
- **syntax**:
- function myfunction(param1,param2,  callback){

    do some work

    call the callback function

    callback(result)
}

## using promises:
- promises are objects representing the eventual completion(or failure) of an asynchronous operation, providing better handling of asynchrounous code with **.then** and **.catch**
### example:
- let promise = newpsomise(function(resolve, reject){

    do something
});

## call stack:
- the **call stack** in javascript is a data structure keeps track of cunfion execution.
- it operates on a **last in first out(lifo)** principle ,eaning the last function added to the stack is the first one to be removed.
### how the call stack works.
- when a function called it is added(pushed) to the top of the call stack.
- when the function executes completely it is removed (popped) from the stack
- the process continues until the stack is empty.
### example:
 function first() {
    
    
    console.log("First function");

    second();

}

function second() {

    console.log("Second function");

    third();

}

function third() {

    console.log("Third function");

}


first();

### call stack execution steps:
- frist() is called **push** first onto the stack
- console.log("first execution") executes.
- second() is called **second** on to the stack
- console.log("second execution") executes.
- thrid() is called **push** thrid onto the stack
- conosle.log("thrid function") executes.
- thrid() completes-------->**pop** thrid off the stack
- second() completes **pop** second of the stack.
- first() completes **pop** first off the stack
- the stack is now emplty.
## call stack overflow
- if a function keeps calling itself without a stopping condition(infinite recursion) the stack will exceeds limit causing a **stack overflow**
## call stack types:
- it is divided into 2 types 
      micro tasks
      macro stacks
## micro stacks:
- in micro stacks we are using premises and await.
## macro stacks:
- macro stacks we are using set timeout, set timeintervel...





 