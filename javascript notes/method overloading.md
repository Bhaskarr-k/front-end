# method over loading ?
- method overloading refers to defingin mnultiple functions with the same name  but diffrent parameter lists.
- java script does not support method over;oading natively because functions in javascript can have any numbeof parameters and only the latest defined functions with the same name is used
- **example**
class example() {

    saymessage (name) {

        console.log("hello, " + name);

    }

    say message(name,age) {

        console.log("hello, "+ name + ". you are " + age + "yeras old")

    }
}

const obj = new example()

obj.saymessage("alice")

obj.saymessage("alice", 25);
# metjod overriding
- method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass

class parent {

    greet() {

        console.log("hello from india");

    }


}

class child extends parent {

    greet() {

        console.log("hello from child")


    }
}

const obj1= new aprent ();

obj1.greet();

const obj2 = new child();

obj2.greet();