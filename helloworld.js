let operands =  ['+', '-', '*', '/'];

let currentTotal = 0; //total sum
let inputNum = 0; //number pressed on calc
let firstRun = true;

function input(fromButton) 
{
    if(firstRun)
    {
      currentTotal = (currentTotal * 10) + fromButton;
      display(currentTotal);  
    }
    else
    {
      inputNum = (inputNum * 10) + fromButton;
      display(inputNum); 
    }
}

function operand(operator)
{
  if(!firstRun)
  {
    switch(operator)
    {
      case('+'): 
        addition(); 
        break;
      case('-'): 
        subtraction();
        break;
      case('/'):
        divide();
        break;
      case('*'): 
        multiply();
        break;
      case('c'):
        clear();
    }
    inputNum = 0;
    display(currentTotal);
  } 
  else
  {
    firstRun = false;
  }
}
  
function addition()
{
  currentTotal = currentTotal + inputNum; 
}

function multiply()
{
  currentTotal = currentTotal * inputNum; 
}

function subtraction()
{
  currentTotal = currentTotal - inputNum; 
}

function divide()
{
  currentTotal = currentTotal / inputNum; 
}

function clear()
{
  firstRun = true;
  currentTotal = 0;
  inputNum = 0;
}

function display(displayNum) 
{
  document.getElementById("Display").innerHTML = displayNum;
}