console.log(1);
console.log(2);
console.log(3);
setTimeout(() => {
    console.log("sorry for waiting you!");
}, 5000);
let num=0;
setInterval(() => {
    num++;
    if (num<7)
    console.log("i am calling!", num);
}, 30);

console.log(4);
console.log(5);
console.log(6);