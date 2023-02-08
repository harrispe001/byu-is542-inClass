//CONSOLE LOG SUPER POWERS
// 1)
console.log({x, y, z})

// 2)change color of code
console.log("%c Red Header", "color: red; font-weight: bold")

// 3)Display a table of object properties
console.table([u, v, w]) // u/v/w are rows, index plus their properties are columns

// 4)time the execution of some code:
console.time('marker');
//execute the code you want to time
console.timeEnd('marker');


// 5) show the current stack trace:
console.trace('descriptive trace');


//SPREAD OPERATOR
let a = [1, 2, 3];

console.log(a); //logs [1, 2, 3] the array
console.log(...a);

let obj1 = {x: 1, y: 2, z: 3};
let obj2 = { ...obj1 }; // usually use Object.assign();

function describe(animal) {
    console.log({animal.x, animal.y})
}

function descreibe2({x, y}) {
    console.log({x, y})
}


//ITERATOR
let iterator = {
    next() {
        //some logic

        return {
            value: 10,
            done: false
        }
    }
}

typeof(iterator) === 'Object';
typeof(iterator.next) === 'Function';


//ITERABLE
// don't use for ...in use for ... of
//for ... of goes in a good order

let iterable = "abcde";

for (const value of iterable) {
    console.log(value); // a b c d e
}


//SPREAD OPERATOR
let parts = ["shoulders", "knee"];
let lyrics = ['Head', ...parts, "and", "toes"];

let dateFields = [1970, 0, 1];
let epoch = new Date(...dateFields);

let obj10 = { food: "bar", x: 42};
let obj20 = { food: "baz", y: 13};

let mergedObj = {...obj10, ...obj20};

function sum(...theArgs) {
    console.log(theArgs) //array of arguments
}

//GENERATOR
funtion* () {
    yield
}

//PROMISE
/*
promise starts as a pending state
Then can transition to Fulfilled/resolve or Rejected
*/
// API methods for Promise
resolve(value) //returns a promise that is fulfilled (resolved with the given value
reject(reason) //
all(iterable)   //Resolve all promises before fulfilled state
race(iterable)


//ASYNC AWAIT
