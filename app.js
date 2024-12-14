/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let firstNumber = null
let secondNumber = null
let operator = null

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
const buttons = document.querySelectorAll('.button');

const display = document.querySelector('.display');

const operators = document.querySelectorAll('.operator')

operators.forEach((operatorButton) => {
  operatorButton.addEventListener('click', (event) => {

    if (operatorButton.innerText === '+'){
      operator = 'addition'
      firstNumber = display.innerText;
      display.innerText = ''
    } else if (operatorButton.innerText === '-'){
      operator = 'subtraction'
      firstNumber = display.innerText;
      display.innerText = ''
      
    } else if (operatorButton.innerText === '*'){
      operator = 'multiplication'
      firstNumber = display.innerText;
      display.innerText = ''
    } else if (operatorButton.innerText === '/'){
      operator = 'division'
      firstNumber = display.innerText;
      display.innerText = ''
    }
    return
  })
})

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);
      let buttonValue = event.target.innerText
      if (buttonValue === 'C') {
        firstNumber = null
        secondNumber = null
        operator = null
        display.innerText = ''
        return 
      } 

      if (buttonValue === '=') {
        
        secondNumber = display.innerText;
        secondNumber = secondNumber.substring(1);

        console.log(secondNumber)
        if (operator === 'addition'){
          display.innerText = parseFloat(firstNumber) + parseInt(secondNumber);
        } else if (operator === 'subtraction'){
          display.innerText = parseFloat(firstNumber) - parseInt(secondNumber);

        } else if (operator === 'multiplication'){
          display.innerText = parseFloat(firstNumber) * parseInt(secondNumber);

        }else if (operator === 'division'){
          display.innerText = parseFloat(firstNumber) / parseInt(secondNumber);

        }





        
        
        firstNumber = '';
        secondNumber = '';
        operator = '';
      } else {
        
        display.innerText += buttonValue;
      }
    });
      
    });

console.log(); 
  