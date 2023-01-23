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