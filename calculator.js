let display = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");
// console.log(display);
// console.log(buttons);
let string = '';

let buttonsArray = Array.from(buttons);

// console.log(buttonsArray);

buttonsArray.forEach(btn =>{
    // console.log(btn);
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            display.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = "";
            display.value = string;

        }else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }else{
            string += e.target.innerHTML;
            display.value = string;
        }
    })
})