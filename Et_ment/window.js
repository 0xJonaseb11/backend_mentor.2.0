// window behavior

// window.reload

"use strict"

const name = "Name";
const age = 23;

function setName(_name) {
    _name = name;
} 

function getName() {
    window.alert("Enter Name");
    window.preventDefault();
    window.reload();
}

console.log("name: ", name)


setTimeout((e) => {
    console.log(name);
    e.preventDefault();
    window.location.reload();
    window.alert("Please make sure you are updated with data!!")
}, 2000);


function getMessage() {
    console.log("Execute evert 5 seconds");
}

const message = window.setInterval(getMessage, 5000);
console.log(message);

