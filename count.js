module.exports.counter = function(arr) {
    return 'There are ' + arr.length + ' elements in the array';
}


module.exports.adder = function(a, b){
    return `The sum of the two numbers is ${a+b}`;
}

module.exports.pi = 3.142;

//or
//module.exports={
//    counter: counter,
//    adder: adder,
//    pi: pi
//};


//console.log(counter(['yeshendra', 'manish']));