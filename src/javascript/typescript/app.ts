'use strict';

declare var require: any;

/// <reference path="./../vanilla/test.d.ts">
const myTest = require('./../vanilla/test.js');
console.log(myTest);

myTest.sayHi('Jon');

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jon";
let user_2 = "Amanda";
let user_3 = "Jessica";

document.body.innerHTML = greeter(user);
document.body.innerHTML = greeter(user_2);

console.log('test');