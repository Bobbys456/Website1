let currentTotal = 0; //total sum
let inputNum = 0; //number pressed on calc
let firstRun = true;
let operation;
let successfulRun;

function input(fromButton) 
{
  /*
  if(successfulRun)
  {
    clear();  
    successfulRun = false;
  }
  */
  
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

function complete()
{
  switch(operation)
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
  //successfulRun = true;
}
  
function operand(operator)
{
  //successfulRun = false;
  if(operator == 'c')
  {
    clear();
    display(currentTotal);
  }
  
  else if(operator == '=')
  {
    complete(); 
  }

  else
  {
    operation = operator;
    
    if(!firstRun)
    {
      complete();
    }
  }
  
  if(!firstRun)
  {
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
  currentTotal += inputNum; 
}

function multiply()
{
  alert(currentTotal); 
  alert(inputNum);
  currentTotal *= inputNum;
}

function subtraction()
{
  currentTotal -= inputNum; 
}

function divide()
{
  currentTotal /= inputNum; 
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