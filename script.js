let display = document.getElementById("display");
let equal = document.getElementById("equal");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiple = document.getElementById("multiple");
let devide = document.getElementById("devide");
let clear = document.getElementById("clear");
let screen = 0;
let firstnum = "";
let operator = "";
let secondnum = "";
let step = 1;
let numberButtons = document.querySelectorAll(".numbers");


//function add number 
     function addNumber(digit) {
        if (step == 1) {
            if (digit === "." && firstnum.includes(".")){
                return;
            }
            firstnum = firstnum + digit;
            display.innerText = firstnum;
        } else {
            if (digit === "." && secondnum.includes(".")) {
                return;
            }
            secondnum = secondnum + digit;
            display.innerText = secondnum;
        }
    }

//loop that search every single number
numberButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        addNumber(btn.innerText);
    });
});

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
           
            if (secondnum === "0") {
                display.innerText = "BOOM!";
                
                
                document.querySelector(".calculator").classList.add("exploded");
                
                
                return; 
            } else {
                screen = Number(firstnum) / Number(secondnum);
                display.innerText = screen;
                firstnum = "";
                secondnum = "";
                operator = "";
                step = 1;
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
    display.innerText = "result";
})
