var events = require('events');
var util = require('util');

var myEmitter = new events.EventEmitter();
var Person = function(name){
    this.name = name;
};

myEmitter.on('someEvent', function(msg){
    console.log(msg)
})

myEmitter.emit('someEvent', 'The some event is emitted');

//attaching a custom event
util.inherits(Person, events.EventEmitter);

var James = new Person('James')
var Mary = new Person('Mary')
var Rayu = new Person('Rayu')

var People = [James, Mary, Rayu];

People.forEach(function(person){
    person.on('speak', function(msg) {
        console.log(person.name + ' said: ' + msg)
    });
});

//emitting the custom event
James.emit('speak', 'Hey dude')

Rayu.emit('speak', `We're cool!`)