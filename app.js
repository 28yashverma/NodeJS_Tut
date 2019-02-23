var counter = require('./count');

console.log(counter.counter(['prabhjeet', 'rishikesh', 'vaishno']));
console.log(counter.adder(19,1))
console.log(counter.pi)
//normal function statement
function sayHi(){
    console.log("saying hi")
}

sayHi();

//function expression

var sayBye = function(){
    console.log("saying bye");
}

sayBye();

function callFunction(fun) {
    fun();
}

callFunction(sayBye);