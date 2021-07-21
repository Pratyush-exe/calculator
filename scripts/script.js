let display = document.getElementById("display-text");
let buttons = document.querySelectorAll('button');
let displayArea = document.getElementById("display-area");
let screenValue = '';

for (button of buttons) {
    button.addEventListener('click', (e) => {
        displayArea.style.backgroundColor = "#2c3033";
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            screenValue += '*';
            display.textContent = screenValue;
        }
        else if (buttonText == '=') {
            try{
                res = eval(screenValue);
                if(res%1 == 0) {
                display.textContent = res;
                }
                else {
                display.textContent = res.toFixed(3);
                }
            }
            catch(error){
                if(error.name == "SyntaxError") {
                    display.textContent = "Invalid Math Input";
                    displayArea.style.backgroundColor = "#473838";
                }
            }            
        }
        else if(buttonText == "π") {
            screenValue += '3.14';
            display.textContent = screenValue;
        }
        else if (buttonText == "⊲"){
            console.log("here");
            screenValue = screenValue.slice(0, -1);
            display.textContent = screenValue;
        }
        else if (buttonText == "C") {
            display.textContent = screenValue = "";
        }
        else {
            screenValue += buttonText;
            display.textContent = screenValue;
        }
        if(screenValue=="") {
            display.textContent = "|";
        }
    })
}