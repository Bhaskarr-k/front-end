# Asynchronous in javascript?
- Asynchronous javascript is a programing language approach that enables the non- execution of tasks, allowing concurrrent operations, improved responsiveness and efficient handling of time-consuming operations in web applications.
- javascript is a single-threaded and synchronous language.
## synchronous:
- this code is executed in order one at a time but javascript may appear to be ascynchronous in some situations.
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