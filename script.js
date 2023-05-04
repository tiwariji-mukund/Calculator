let string = "";
let buttons = document.querySelectorAll('.btn');
let display = document.querySelector('#display');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        //evaluate the values
        if(e.target.innerHTML === '='){
            string = eval(string);
            display.value = string;
        }
        //clear the screen
        else if(e.target.innerHTML === 'AC'){
            string = "";
            display.value = string;
        }
        //calculate the percentage
        else if(e.target.innerHTML === '%'){
            string = eval(string);
            let result = string/100;
            string = result;
            display.value = string;
        }
        else if(e.target.innerHTML === "CE"){
            let result = string.slice(0, string.length-1);
            string = result;
            display.value = string;
        }
        else{
            console.log(e.target);
            string += e.target.innerHTML;
            display.value = string;
        }
        
    })
})