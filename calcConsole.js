alert('My Calculator'  +  '\nPress OK to proceed' )
let num1 = parseInt(prompt('Number 1: '));
let opr = prompt('Operator:(+,-,/,*) ');
let num2 = parseInt(prompt('Number 2: '));
let numAdd = num1 + num2;
let numMinus = num1 - num2;
let numTimes = num1 * num2;
let numDivide = num1 / num2;

if(opr == '+')
{
    alert( 'Result is ' + numAdd)
}else if(opr == '-')
{
    alert('Result is ' + numMinus)
}else if(opr == '*')
{
    alert('Result is ' + numTimes)
}else if(opr == '/')
{
    alert('Result is ' + numDivide)
}
