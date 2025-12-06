let display = document.getElementById("display");
let zero = document.getElementById("zero");
let kamat = document.getElementById("kamat");
let equal = document.getElementById("equal");
let three = document.getElementById("three");
let two = document.getElementById("two");
let one = document.getElementById("one");
let six = document.getElementById("six");
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
let operator = "";
let secondnum = "";
let step = 1;

zero.addEventListener("click", function(){
    if (step == 1) {
        firstnum = firstnum + "0";
        display.innerText = firstnum;
    } else {
        secondnum = secondnum + "0"
        display.innerText = secondnum;
    }
})
one.addEventListener("click", function(){
    if (step == 1) {
        firstnum = firstnum + "1";
        display.innerText = firstnum;
    } else {
        secondnum = secondnum + "1"
        display.innerText = secondnum;
    }
})
two.addEventListener("click", function(){
    if (step == 1) {
        firstnum = firstnum + "2";
        display.innerText = firstnum;
    } else {
        secondnum = secondnum + "2"
        display.innerText = secondnum;
    }
})
three.addEventListener("click", function(){
    if (step == 1) {
        firstnum = firstnum + "3";
        display.innerText = firstnum;
    } else {
        secondnum = secondnum + "3"
        display.innerText = secondnum;
    }
})
four.addEventListener("click", function(){
    if (step == 1) {
        firstnum = firstnum + "4";
        display.innerText = firstnum;
    } else {
        secondnum = secondnum + "4"
        display.innerText = secondnum;
    }
})
five.addEventListener("click", function(){
    if (step == 1) {
        firstnum = firstnum + "5";
        display.innerText = firstnum;
    } else {
        secondnum = secondnum + "5"
        display.innerText = secondnum;
    }
})
six.addEventListener("click", function(){
    if (step == 1) {
        firstnum = firstnum + "6";
        display.innerText = firstnum;
    } else {
        secondnum = secondnum + "6"
        display.innerText = secondnum;
    }
})
seven.addEventListener("click", function(){
    if (step == 1) {
        firstnum = firstnum + "7";
        display.innerText = firstnum;
    } else {
        secondnum = secondnum + "7"
        display.innerText = secondnum;
    }
})
eight.addEventListener("click", function(){
    if (step == 1) {
        firstnum = firstnum + "8";
        display.innerText = firstnum;
    } else {
        secondnum = secondnum + "8"
        display.innerText = secondnum;
    }
})
nine.addEventListener("click", function(){
    if (step == 1) {
        firstnum = firstnum + "9";
        display.innerText = firstnum;
    } else {
        secondnum = secondnum + "9"
        display.innerText = secondnum;
    }
})
kamat.addEventListener("click", function(){
    if (step == 1) {
        firstnum = firstnum + ".";
        display.innerText = firstnum;
    } else {
        secondnum = secondnum + "."
        display.innerText = secondnum;
    }
})

plus.addEventListener("click", function(){
    step = 2;
    operator = "+";
    display.innerText = operator;
})
minus.addEventListener("click", function(){
    step = 2;
    operator = "-";
    display.innerText = operator;
})
devide.addEventListener("click", function(){
    step = 2;
    operator = "/";
    display.innerText = operator;
})
multiple.addEventListener("click", function(){
    step = 2;
    operator = "x";
    display.innerText = operator;
})

equal.addEventListener("click", function(){
    switch (operator) {
        case "+":
            screen = Number(firstnum) + Number(secondnum);
            display.innerText = screen;
            firstnum = "";
            secondnum = "";
            operator = "";
            step = 1;
            break;
        case "-":
            screen = Number(firstnum) - Number(secondnum);
            display.innerText = screen;
            firstnum = "";
            secondnum = "";
            operator = "";
            step = 1;
            break;
        case "x":
            screen = Number(firstnum) * Number(secondnum);
            display.innerText = screen;
            firstnum = "";
            secondnum = "";
            operator = "";
            step = 1;
            break;
        case "/":
            // --- NEW CODE START ---
            // Check if dividing by 0
            if (secondnum === "0") {
                display.innerText = "BOOM!";
                
                // Find the main calculator container and add the CSS class
                // We use querySelector because your calculator is inside a <section class="calculator">
                document.querySelector(".calculator").classList.add("exploded");
                
                // Stop the function here so the math doesn't happen
                return; 
            }
            break;
        default:
            break;
    }
})















clear.addEventListener("click", function(){
    firstnum = "";
    secondnum = "";
    operator = "";
    step = 1;
    display.innerText = "";
})
