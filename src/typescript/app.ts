'use strict';

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jon";
// let user = ["Something"];

document.body.innerHTML = greeter(user);