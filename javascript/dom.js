const header = document.getElementById("header")
console.log(header.textContent);

// if you we have multiple classes then you can use 

const menus = document.getElementsByClassName("menus")
Array.from(menus).foreach(div => console.log(div.textcontent))


// if you want to select query selector

const firstbox = document.querySelector('.box')
console.log(firstbox.textContent);


const item = document.querySelectorALl('.box')
items.forEach(item => console.log(item.textContent))