let operands =  ['+', '-', '*', '/'];
let count = 0;

let currentTotal = 0; //total sum
let inputNum = 0; //number pressed on calc
let firstRun = true;

function input(inputNum) 
{
    if(firstRun)
    {
      currentTotal = input *  (10 ^ count);
      count++;
    }

    else
    {
      inputNum = input *  (10 ^ count);
      count++;
    }
  alert(currentTotal);
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
    }
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
