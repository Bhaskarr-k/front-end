const user =[
    {
        name: 'bhaskar',
        age: 24,
        course: 'python'
    },
    {
        name: 'basu',
        age: 26,
        course: 'java'
    }
];

let person = document.getElementById("usertable");
user.forEach((user) => {
    let row = document.createElement('tr')
    row.innerHTML = `<td>${user.name}</td> <td>${user.age}</td> <td>${user.course}</td>`
    person.appendChild(row)
});

