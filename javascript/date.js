// const now = new Date()
// console.log(now);                ------------------>Date   using paranthesis


// const time = new Date(2020, 0, 1, 0, 0, 1000)
// console.log(time);                                   --------------------->using custom date


// const string  = "2024-06-19T12:00:00z"
// const time = new Date(string)
// console.log(typeof time);            -------------------> using string  


const now = new Date()
const year = now.getFullYear()
const month = now.getMonth()
const day = now.getDate()
const hour = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds()




console.log(`${year}-${month}-${day}-${hour}-${minutes}`);