'use strict';

declare var require: any;

/// <reference path="./../javascript/test.d.ts">
const myTest = require('./../javascript/test.js');

myTest.sayHi();

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jon";
let user_2 = "Amanda";

document.body.innerHTML = greeter(user);
document.body.innerHTML = greeter(user_2);