//awful and bad parts of javascript

/*Global Variables*/
/* 
var foo = value; //outside of a function - makes sense
window.foo = value; //make it attached to the window function - makes sense
foo = value; //anywhere - doesn't make sense
*/


/*Scope*/
/*
No block scope with with var - hoisted to the top
NEVER USE "var" - always use let and const
*/

/*parseInt*/
/*
parseInt("08") - starting with a 0 would assume octal

parseInt(string, '10');
*/

/* "+" */
/*
use typeof when adding
1 + 2 // === 3
"1" + "2" // === "12"
"1" + 2 // === "12"
1 + "2" // === "12" 
*/

/*floating point values are inexact, but all numbers are doubles*/
/*
All numbers are floating point numbers
math.sqrt(10) * math.sqrt(10) === 10.0000000000000002 //varies by implementation

Instead of equality of identity comparison:

if(a.latitude === b.latitude)

do something like (a.latitude - b.latitude < 0.000001)
*/

/*Falsy values*/

/*
0 == ""  //is true

Falsy values: zero, NaN, empty string, false, null, undefined

ALWAYS USE "===" AND "!=="

avoid with, eval, continue

avoid switch fall-throughs - use break in each case

Always use {} body, even for one-line bodies

Don't use ++ or --

x = ++1
x = 1++ //not the same statements
*/


/*Avoid bitwise operators*/

/*Avoid (*, |, ^, ~, >> >>>, <<)*/


/*function exptression*/

/*
function statement -
function foo() {}

function expression -
const foo = function(){
}
/*

//avoid new operator
/*
avoid the new operator if possible
use object and array literals({} and [])
*/

//avoid the void operator


//strict mode
/*
Always try and use strict mode

Use strict mode on function by function basis
*/