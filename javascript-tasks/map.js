const users = [
    {
        name:'bhasu',
        course:'pyfs',
        location:'marathalli'
    },
    {
        name:'bhaskar',
        course:'React',
        location:'bangalore'

    },
    {
        name:'ram',
        course:'javascript',
        location:'bangalore'
    }
]

const newusers = users.map(user => user.name);
console.log(newusers);

// filter

const courses  = ["html","css","bootstrap","reactjs","java","python"]
const newcourses = courses.filter(course =>course.includes('a'));
console.log(newcourses)
