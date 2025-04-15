// window.onload = function() {

// var lists = document.getElementsByTagName("li");

//     for (let li = 0; li < lists.length; li++) {

//         lists[li].style.border = "1px solid black";

//         lists[li].onmouseover = function() {

//            this.style.backgroundColor = "gray";
//         };

//         lists[li].onmouseout = function() {

//           this.style.backgroundColor = "white";
//         }
//     }
// }

// window.onclick = function() {
//   setTimeout(() => {
//     prompt("Are you sure");
//   }, 2000);
// }

"use strict"
var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");

li1.parentNode.removeChild(li1);
