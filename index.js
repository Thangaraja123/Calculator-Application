
// Get Elements

const numbers = document.querySelectorAll(".btn-number");
const btnnumber1 = document.querySelectorAll(".btn-number1"); 
const inputs = document.getElementById("input");
const operator = document.querySelectorAll(".operator");
const operator1 = document.querySelectorAll(".operator");
const stores = document.getElementById("store");
const clear = document.querySelector(".clear");
const clear1 = document.querySelector(".clear1");
const backspace = document.querySelector(".backspace");
const equal = document.getElementById('Equal');
const bars  = document.querySelector('.test4');
const nav = document.querySelector('.nav');
const standard = document.getElementById('standard');
const name = document.getElementById('name');
const curr = document.getElementById('currency');
const time = document.getElementById('time');
const date = document.getElementById('date');
const currency = document.querySelector(".currency");
const tables = document.querySelector(".tables");
const tables1 = document.querySelector(".tables1");
const one = document.getElementById("one");
const two = document.getElementById("two");
const clear3 = document.getElementById("clear3"); 
const america = document.getElementById("america");
const iran    = document.getElementById("iran");
const btx = document.getElementById('byx');
const square = document.getElementById('square');
const root = document.getElementById('root');
const clock = document.getElementById('clock');

//Variable Declaration

let number1 = '';
let number2 = '';
let lastoperation = '';
let doller = 75.01;
let Rial = 0.18;
let dinar =207.60;
let dolle = 39.24; 

let number3 = '';


//Numbers Click Function

numbers.forEach(number => {

    number.addEventListener('click', (add) => {

        add.preventDefault();

        inputs.value += add.target.innerText;
    })

});

//Currency Number Function

btnnumber1.forEach(number=>{
    number.addEventListener('click',(e)=>{

        e.preventDefault();

     one.value+=e.target.innerText;
     one.style.fontSize="30px";
     two.value = one.value * doller;
     two.style.fontSize = "25px";
    })
})



//Opearators Click Function

operator.forEach(operators => {

    operators.addEventListener('click', (oper) => {

        oper.preventDefault();

        const operationname = oper.target.innerText;

        stores.value = inputs.value + operationname;
        number1 = parseFloat(stores.value);

        lastoperation = operationname;
        inputs.value = ' ';

    })

});

//Equal Click Function 

equal.addEventListener('click', (e) => {

    e.preventDefault();

    number2 = inputs.value;

    result = stores.value + inputs.value + e.target.innerText;
    stores.value = result;

    if (lastoperation === '+') {

        inputs.value = +number1 + +number2;

    }

    else if (lastoperation === '×') {
        inputs.value = number1 * number2;

    }
    else if (lastoperation === '−') {

        inputs.value = number1 - number2;
    }

    else if (lastoperation === '÷') {

        inputs.value = number1 / number2;
    }

    else {
        inputs.value = 'syntax error';
    }

})

byx.addEventListener('click',(e)=>{
    e.preventDefault();

    stores.value = "1" + "/" + "(" + inputs.value + ")";
    inputs.value = 1 / inputs.value;
});

square.addEventListener('click',(e)=>{
    e.preventDefault();

    stores.value = "sqr" + "(" + inputs.value + ")";
    inputs.value = inputs.value * inputs.value;  
});


//Clear Function

clear1.addEventListener('click', (e) => {

    e.preventDefault();

    stores.value = '';
    inputs.value = '';

});

clear.addEventListener('click', (e) => {

    e.preventDefault();

    inputs.value = '';

});

clear3.addEventListener('click', (e) => {

    e.preventDefault();

    one.value = '';
    two.value = '';

});


// backspace Function

backspace.addEventListener('click', (e) => {
    e.preventDefault();

    inputs.value = inputs.value.slice(0, -1);
})

//KeyBoard Function

window.addEventListener('keydown', (e) => {

    e.preventDefault();

    if (e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '0' ||
        e.key === '.'
    ) {
        numbers.forEach(button => {
            if (button.innerText === e.key) {

                button.click();
            }

        })
    }

    else if (e.key === '+') {

        operator.forEach(button => {

            if (button.innerText === "+") {
                button.click();

            }

        })
    }

    else if (e.key === '-') {

        operator.forEach(button => {

            if (button.innerText === '−') {
                button.click();
            }
        })
    }
    else if (e.key === '*') {

        operator.forEach(button => {

            if (button.innerText === '×') {
                button.click();

            }
        })
    }
    else if (e.key === '/') {
        operator.forEach(button => {
            if (button.innerText === '÷') {
                button.click();
            }

        })
    }

    else if (e.key === '=' || e.key === 'Enter') {

        equal.click();
    }

    else if (e.key === 'Delete') {

        inputs.value = '';
    }

    else if (e.key === 'Backspace') {
        inputs.value = inputs.value.slice(0, -1);
    }
});


// Nav bar Function


bars.addEventListener('click',(e)=>{

    e.preventDefault();
    nav.style.display = "Block";

});

//standard Nav Bar Function

standard.addEventListener('click',(e)=>{

    e.preventDefault();

    name.value= e.target.innerText;
   nav.style.display = "none";
})

//Currency Nav Bar Function

curr.addEventListener('click',(e)=>{

    e.preventDefault();

    name.value = e.target.innerText;
    nav.style.display = "none";
    
    tables.style.display="none";
    currency.style.display="Block";
    inputs.style.display="none";
    stores.style.display="none";

})

//Standared Navbar Function:

standard.addEventListener('click',(e)=>{

    e.preventDefault();
    tables.style.display = "block";  
    currency.style.display = "none";
    inputs.style.display = 'block';
    stores.style.display = "block";

})

time.addEventListener('click',(e)=>{
    e.preventDefault();

    name.value = e.target.innerText;
    nav.style.display = "none";
})
