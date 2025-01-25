// define object:

const person = {
    greet: function(){
        console.log('hello');
    }
};

const student  = Object.create(person);
student.name = "john";
student.greet();
console.log('student name is ${student.name}');