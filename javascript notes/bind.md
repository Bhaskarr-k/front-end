# Bind?
- the bind method creates a new function and when that new function is called it set this keyowrd to the first argument which is passed to the bind method
- and if any other sequences of arguments preceding the first argument are passed to the bind method then they are paaaed as an argument to the new function when the new function is called
### syntax:
bind(thisarg)

bind(thisarg, arg1, arg2.......argn)
### example:
let nameObj = {

    name: "Tony"

}

let PrintName = {

    name: "steve",

    sayHi: function () {


        // Here "this" points to nameObj

        console.log(this.name); 

    }

}

let HiFun = PrintName.sayHi.bind(nameObj);
HiFun();
