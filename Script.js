let display = document.getElementById("display");
let zero = document.getElementById("zero");
let kamat = document.getElementById("kamat");
let equal = document.getElementById("equal");
let three = document.getElementById("three");
let two = document.getElementById("two");
let one = document.getElementById("one");
let six = document.getElementById("five");
let five = document.getElementById("five");
let four = document.getElementById("four");
let plus = document.getElementById("plus");
let nine = document.getElementById("nine");
let eight = document.getElementById("eight");
let seven = document.getElementById("seven");
let minus = document.getElementById("minus");
let multiple = document.getElementById("multiple");
let devide = document.getElementById("devide");
let clear = document.getElementById("clear");
let screen = 0;
let firstnum = "";
let operator;
let secondnum = "";


zero.addEventListener("click", function () {
    screen = 0;
    display.innerText = screen;
    
})

