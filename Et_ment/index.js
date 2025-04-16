// Interval setting in program execution
// setTimeout 

let age = 10;
let _name = "Etienne";

// console.log("My name is :");
// console.log(_name);
// console.log("My age is :");
// console.log(age);

// setTimeout(() => {
//     console.log("My name is :");
// }, 5000);

// setTimeout(() => {
//     console.log(_name);
// }, 6000);

// setTimeout(() => {
//     console.log("My age is :");
// }, 7000);

// setTimeout(() => {
//     console.log(age);
// }, 10000);


// const handleConnect = () => {
//     const data = {}

//     setTimeout(() => {
//         window.reload();
//     }, 5000)
    

//     sendMessage()
// }

// //   setTimeout(switchoffLig(), 60000);



// // setInterval

// function getName() {
//     console.log(_name);
// }

// function getAge() {
//     console.log(age);
    
// }

// const every5secs = setInterval(getName, 5000);
// const every2secs = setInterval(getAge, 2000);

// console.log(every2secs);
// console.log(every5secs);



// events and event listeners 


// global array methods
// reverse a string
 let numbers = 3243546758690;
//  let _toString = numbers.toString();
//  console.log(_toString);
//  console.log(_toString.isNaN);
// console.log(numbers.toArray);

//  console.log(typeof(_toString));

let name = "Jonas";
let result1 = name.split("");
console.log("Result 1: ", result1)

let result2 = result1.reverse();
console.log("Result 2:",  result2)

let result3 = result2.join(" ");
console.log("result 3: ", result3);

// function reverseString() {
//     return name
//     .split(" ")
//     .reverse()
//     .join("");
// }
// // console.log(reverseString());
// // console.log(reverseString(result));

// jonas = > J o n a s


// map method

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
  ];

// employee mag't
const employee = [
    { empName: "Jonas", company: "RSB", age: 20},
    { empName: "Etienne", company: "RSB", age: 30},
    { empName: "Thierry", company: "RSB", age: 40},
    { empName: "John", company: "SELF-EMPLOYED", age: 23},
    { empName: "Jessy", company: "NESA", age: 24},
    { empName: "Amad", company: "REB", age: 16},
    { empName: "Leo", company: "RTB", age: 19},
]

 setInterval(() => {
    const empNames = employee.map(emp => emp.empName);
    console.log("Registered Employees", empNames);
 }, 5000);

 setInterval(() => {
    const empAges = employee.map(emp => emp.age);
    console.log("Employee ages are: ", empAges);
 }, 6000);


 setInterval(() => {
    const compNames = employee.map(comp => comp.company);
    console.log("Companies registered: ", compNames);
 }, 6500)
 



const names = users.map(user => user.name);
const ages = users.map(user => user.age);
console.log("User ages : ", ages);
    console.log("User Names: " , names );



    /// filter method
    // filter array contents to retrive certain content

    // get employees at RSB
    const rsbEmps = employee.filter(emp => emp.company === "RSB");
    console.log("RSB Employees are: ", rsbEmps);


    const adults = employee.filter(emp => emp.age > 18);
    console.log("Adults: ", adults);


      employee.pop();

    // pushing values to array
    // it appends values at the end of the

    let employeeToAddToSystem =  { empName: "Sebera", company: "StoneProofLabs", age: 30}
    employee.push(employeeToAddToSystem);

    console.log(employee);

    // removing user from array with pop
    employee.pop();
    console.log(employee)


    // adding an element to the start of an array
    let employeeToAddToFirstIndex =  { empName: "0xJonaseb11", company: "Marchal Real Estate", age: 20}
    employee.shift();
    // employee.shift(employeeToAddToFirstIndex);

    employee.unshift(employeeToAddToFirstIndex);
    let _numbers = [12, 234, 45,135];
    _numbers.shift();
    _numbers.unshift(23453);  



    // // append()
    // employee.append(employeeToAddToSystem);
    // console.log(employee);

    
    setTimeout(() => {
        console.log("Employee List After Shitf: ", employee)
        console.log(_numbers);
    }, 8000);



    //sorting = strings = arrays
    employee.sort((a, b) => {
        return a.length - b.length;
        // return a.localeCompare(b); // alphabetically
    });
    console.log("Employees after sorting Alphabetically: ", employee);

    console.log("Employees after sorting: ", employee);
    const names_ = ["Jonas", "manchester", "aknabkAKAKNBOANBAKBJ"];
names_.sort((a, b) => {
    return a.length - b.length;  // ascending
    //  return b.length - a.length;
});
console.log("When Only strings - Names:", names_);

// _numbers.sort();
// console.log("Numbers after sort", _numbers);

let nums = [123, 2343, 454, 2, 10];

// nums.sort();
nums.sort((a, b) => {
    return a - b; // ascending order
    // return b - a; // descendin order
})
console.log("Numbers after sorting:", nums)



// sorting alphabetically
const alphabet = ["Wooo", "Jonas", "horror", "Ultra", "Worry"];

alphabet.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(alphabet);


// sorting employees alphabetically
// employee.sort((a, b) => {
//     return a.localeCompare(b);
// });
// console.log(employee);


/// slice() method
const ID = 1996123456789198; // 16 characters
ID.toString().slice(0, 4);
console.log("ID after slicing: ", ID);
ID.toString().slice(10);
console.log("ID after slicing: ", ID);

