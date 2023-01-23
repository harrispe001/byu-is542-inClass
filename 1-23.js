//encapsalation
/*
object that returns a function(s)
Has other values that are encapsulated from program users
Functions still have access to local variable

Example:
*/

const myObject = ( function () {
    let isValid = false;
    return {
        isValid: function () {
            return isValid;
        },

        reset: function () {
            isValid = true;
        }
    }
}());

/* 
local variables are not accessible outside the scope
Example:
*/
const validator = (function(){
    let isValid = false;
    return {
        valid: function () { return isValid; }
    }
}());

//will return undefined
validator.isValid


/*
Scoping rules in Javascript
var will overwrite varibles - almost as if you can declare a vairable twice but it is assigning

let will not overwrite previous instances -example when you have curly block you can redeclare 

Always use LET and CONST
*/


/*
Arrow functions

put parameters on left and arguments on the right side

every function returns undefined if no return value

need curly brackets when more than one line

if curly brackets you have to have an explicit return
if no curly brackets it is an implicit return
*/

let materials = [
    'Hydrogen',
    'Oxygen',
    'Carbon'
]

console.groupCollapsed(materials.map(material => material.length));

/*
.foreach execute the body for each element in order

.filter(returns an array of only those elelments where expression(element) is true

.map(element => expression(element))

.reduce((previousValue, currentValue) => expression(previousValue, currentValue), initialValue)
*/


/*
shorthand method for functions
*/
{
    speak: function() {
        return true;
    }
}

{
    speak() {
        return true;
    }
}

/*
Mix ins can add classes?
*/

/*
Static methods run on the class level
*/


//arrays
/*
Arrays are array-like objects

length of an array is not the length of an array but the largest index + 1
    you can create holes in your area

You should not use the delete method to remove properties - it will leave holes

*/
let x = ["zero", NaN, true, 3];

let y = x.slice(); //will make a shallow copy. If you change an object it will change the other
let z = x.slice(2); // copies [true, 3] into z
let w = x.slice(1, 3); // copies [NaN, true]

x.splice(2, 1); //x is modified and now holds ['zero', true, 3] removes objects from an array

