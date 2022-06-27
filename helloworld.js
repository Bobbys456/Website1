let operands =  ['+', '-', '*', '/'];
let count = 0;

let currentTotal = 0; //total sum
let inputNum = 0; //number pressed on calc
let firstRun = true;

function input(fromButton) 
{
    if(firstRun)
    {
      currentTotal = (currentTotal * 10) + fromButton;
      display(currentTotal) 
      count++;
    }
    else
    {
      inputNum = (inputNum * 10) + fromButton;
      display(inputNum); 
      count++;
    }
}

function operand(operator)
{
  count = 0; //set count to zero to input next number in ones position 
  
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
      case('C')
        clear();
    }
    display(currentTotal)
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
}

function display(displayNum) 
{
  document.getElementById("Display").innerHTML = displayNum;
}