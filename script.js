let display = document.getElementById("display");
let equal = document.getElementById("equal");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiple = document.getElementById("multiple");
let devide = document.getElementById("devide");
let clear = document.getElementById("clear");

//creating the object "calculator"
let calculator ={
    screen: 0,
    firstnum: "",
    secondnum: "",
    operator: "",
    step: 1
};
let numberButtons = document.querySelectorAll(".numbers");

//function add number 
    function addNumber(digit) {
        if (calculator.step == 1) {
            if (digit === "." && calculator.firstnum.includes(".")){
                return;
            }
            calculator.firstnum = calculator.firstnum + digit;
            display.innerText = calculator.firstnum;
        } else {
            if (digit === "." && calculator.secondnum.includes(".")) {
                return;
            }
            calculator.secondnum = calculator.secondnum + digit;
            display.innerText = calculator.secondnum;
        }
    }

//loop that search every single number
numberButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        addNumber(btn.innerText);
    });
});

plus.addEventListener("click", function(){
    calculator.step = 2;
    calculator.operator = "+";
    display.innerText = calculator.operator;
})
minus.addEventListener("click", function(){
    calculator.step = 2;
    calculator.operator = "-";
    display.innerText = calculator.operator;
})
devide.addEventListener("click", function(){
    calculator.step = 2;
    calculator.operator = "/";
    display.innerText = calculator.operator;
})
multiple.addEventListener("click", function(){
    calculator.step = 2;
    calculator.operator = "x";
    display.innerText = calculator.operator;
})

equal.addEventListener("click", function(){
    switch (calculator.operator) {
        case "+":
            calculator.screen = Number(calculator.firstnum) + Number(calculator.secondnum);
            display.innerText = calculator.screen;
            calculator.firstnum = "";
            calculator.secondnum = "";
            calculator.operator = "";
            calculator.step = 1;
            break;
        case "-":
            screen = Number(calculator.firstnum) - Number(calculator.secondnum);
            display.innerText = calculator.screen;
            calculator.firstnum = "";
            calculator.secondnum = "";
            calculator.operator = "";
            calculator.step = 1;
            break;
        case "x":
            calculator.screen = Number(calculator.firstnum) * Number(calculator.secondnum);
            display.innerText = calculator.screen;
            calculator.firstnum = "";
            calculator.secondnum = "";
            calculator.operator = "";
            calculator.step = 1;
            break;
        case "/":
           
            if (calculator.secondnum === "0") {
                display.innerText = "BOOM!";
                
                document.querySelector(".calculator").classList.add("exploded");
                
                return; 
            } else {
                calculator.screen = Number(calculator.firstnum) / Number(calculator.secondnum);
                display.innerText = calculator.screen;
                calculator.firstnum = "";
                calculator.secondnum = "";
                calculator.operator = "";
                calculator.step = 1;
            }
            break;
        default:
            break;
    }
})

clear.addEventListener("click", function(){
    calculator.firstnum = "";
    calculator.secondnum = "";
    calculator.operator = "";
    calculator.step = 1;
    display.innerText = "result";
})