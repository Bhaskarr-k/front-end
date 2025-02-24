# set time out?
- function in javascript that allows you to schedule the execution of a function after an amount of time (milliseconds) timer are approximate  (varies based in the workload of the javascript runtime env...)


setTimeout(callback, delay);

function sayhello(){

    window.alert("hello");

}

setTimeout(() => window.alert("hello"), 3000);