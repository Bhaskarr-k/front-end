# call:
- the call method calls the fucntion directly and sets this ti first argument passed to the call method and if any other sequence of arguments are passed  to the call method then they are passed as an argument to the function.
### syntax:

call(objefctInstance)
call(objectImastance, arg1,,,,,,,argn)

### example:

let nameObj = {

    name: "Tony"

}


let PrintName = {

    name: "steve",

    sayHi: function (age) {

        console.log(this.name + " age is " + age);

    }

}


PrintName.sayHi.call(nameObj, 42);
# apply method:
- the apply method calls the function directly ans sets this to the forst argument passed to the apply method and if any oyher arguments provided to the call method theny they are passed as an argument to the function.
### syntax:

apply(objectInstance)

apply(objectInstance, argsArray)


### example:

let nameObj = {

    name: "Tony"

}


let PrintName = {

    name: "steve",

    sayHi: function (...age) {

        console.log(this.name + " age is " + age);

    }

}

PrintName.sayHi.apply(nameObj, [42]);


