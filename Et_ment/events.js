// // onclick

// const { listeners } = require("process");

// // const { on } = require("events");

// // onmouseover

// // on

// // onerror

// // onload


// window.onload = function () {

//     var li = document.getElementsByTagName("li");

//     for (var j = 0; j < li.length; j++) {
//         li[j].style.border = "1px solid #000";
//         li[j].onmouseover = (() => {
//             this.style.backgroundColor = "blue";
//             this.style.border = "6px bold #999"
//         });
//     }

//     var every = document.getElementById("everywhere");
//     var ev = document.getElementById("ev");
//     // let l2 = document.getElementsByClassName("l2");
//     // let l3 = document.getElementsByClassName("l3")


//     // // remove it from the document
//     // every.parentNode.removeChild(every);
//     // every.parentNode.appendChild(ev)
//     // l2.parentNode.removeChild(l2);


// var li = document.getElementsByTagName("li");

// for (var i = 0; i < li.length; i++ ) {
//     // mouseover event
//     li[i].onmouseover = function() {
//         this.style.backgroundColor = 'blue';
//     };


//     // attach a mouseout event
//     li[i].onmouseout = function() {
//         this.style.backgroundColor = 'white';
//     };
//   };
// };




// // Adding custom event listeners

// function changeColor (color) {
//     this.style.color = color;
// }
// changeColor("red");

// var main = document.getElementById("main");

// // dealing with objects
// var obj = new Object();
// obj.val = 4;
// obj.click = function() {
//     alert("Hello");
// }

// var name = "Etienne";

// class System {

// }

// function User (name) {
//     this.name = name;
//     // super.name = name;
//  }

//  var me = new User("Jonas");

//  alert (me.name == "Jonas");



//  Creating custom events with YAHOO lirary
var YAHOO = {};
YAHOO.util = {};
var name = "Leo";

YAHOO.util.Event = {
    addEventListener: function(_name) {
        _name = name;
    }
}

var result = YAHOO.util.Event.addEventListener("button", "click", function() {
    alert("Thanks for clicking the button!!")
});
console.log(result);


addEventListener(window, "load", function () {
    next(id("everywhere")).style.background = "blue";
})

// onsubmit

