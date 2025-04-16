
"use strict"

// setTimeout((e) => {

//     e.preventDefault();
//     window.location.reload();
//     alert("Are you sure");

// }, 2000);

// function reloads(e) {
//      console.log("Hello");
//    // e.preventDefault();
//     window.location.reload();
//   //  window.alert("Are you sure");
// }
// const message = window.setTimeout(reloads(), 5000);
// console.log(message);   

// let name_ = "Eric";
// let age = 20;

// setInterval(() => {
//     console.log(name_);
//     console.log(age);
//     //window.location.reload();
// }, 2000);
//Reverse Number

// let _name = "Eric";
// let Splited =  _name.split("");
// console.log("Splited Name: ", Splited);
// let Reversed =  Splited.reverse();
// console.log("Reversed Name: ",Reversed);
// let joined = Reversed.join("");
// console.log("Joined Name: ", joined);

// //Arrays

const PesonalData = [
    {name: "Eric", age: 10, Address: "Kigali"},
    {name: "Emmy", age: 15, Address: "Mayange"},
    {name: "Anna", age: 20, Address: "Kimihurura"},
    {name: "Amina", age: 30, Address: "Nyarugenge"},
    {name: "Alice", age: 40, Address: "Bugesera"},
];

const Names = PesonalData.map(namee => namee.name);
console.log("Person's Names Are: ", Names);

const ages = PesonalData.filter(ages => ages.age < 18);
console.log("Peoples below 18 ages are: ", ages);

let lastData = {name: "Etiene", age: 20, Address: "Rilima"};
const AddAtTheEnd = PesonalData.push(lastData);
console.log(PesonalData);

let removeLastData = PesonalData.pop();
console.log(PesonalData);

let FirstData =  {name: "Regis", age: 25, Address: "Rilima"};
let AddFirstData = PesonalData.unshift(FirstData);
console.log(PesonalData);

PesonalData.shift();
console.log(PesonalData);

const data = ['Eric', 'Amina', 'Emmy'];

data.sort( (a, b) => {
   return b.length - a.length;
 
});
console.log(data);