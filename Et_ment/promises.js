require("dotenv").config();

// const { error } = require("console");
// const { resolve } = require("path");

// const promise = new Promise((resolve, reject) => {

//     const value = "Allowed";
//     const email = "sebejaz99@gmail.com";
//     const password = "jonas@gmail.com";
    
// // const reason = "Invalid Credentials";
//     // any asynchronous stuff

//     const Main = async () => {
//         const Transaction = await bank.getTransactionFrom("Account");
//         const transaction = await Transaction.finished();

//     }


//     if (email.isValid && password.isValid && !isRestricted) {
//         resolve(value);
//     }  else {
//         let message = "Error occurred - Denied access!!"
//         let reason = new Error(message);
//         reject(reason);

//         throw reason;
  
//     }

// });

// promise.then(value => {
//     //  promise fulfilled successfully
// }).catch(err) {
//     // DO something in case promise was rejected 
//     console.error(err);
// }


// const runMain = () => {
//     try {
//         await Main();
//         process.exit(1);
//     } catch(err) {
//         console.error(err);
//         process.exit(0);
//     }
// }

// runMain();





// PROMISE CHAINING

const promise1 = new Promise(resolve => setTimeout(resolve, 5000));

promise1
.then(() => 2)
.then(value => {value === 2})
.then();


function wait(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

var p = wait(5000).then(() => wait(4000)).then(() => wait(1000));
p.then(() => console.log("10 seconds have elapsed!!"));

// waiting for multiple concerrent promises

function resolve(value, milliseconds) {
    return new Promise(resolve => setTimeout(() => resolve(value), milliseconds));
}

// console.log(resolve("/login", 5000));

function reject(reason, milliseconds) {
    return new Promise((_, reject) => setTimeout(() => reject(reason), milliseconds));
}

// console.log(reject("Invalid Credentials", 6000))


Promise.all([
    resolve(1, 5000),
    resolve(2, 6000),
    resolve(3, 7000)
]).then(values => console.log(values));


Promise.all([
    resolve(1, 5000),
    reject("Error occurred", 6000),
    resolve(2, 7000)
]).then(values => console.log(values))

.catch(reason => console.log(reason));


// Error handling - the standard way

const runProgram = async() => {
    try {
        await resolve(2, 4000);
        console.log("Valid!!")
    } catch(err) {
        reject("Error shyttt", 5000);
        console.error(err);
    }
    
}

runProgram();



// Promisifying functions with callbacks

let options = [
    {name: "Leo" },
    {age: 12},
    {school: "TSS"}
]

function fooFn(options, callback) {
    setTimeout(() => {
        if (!options || !Array.isArray(options)) {
            return callback(
                new Error("Invalid options"), null
            );
        }

        callback(null, options)
    }, 2000);
}

function promiseFooFn(options) {
    return new Promise((resolve, reject) => 
        fooFn(options, (err, result) => 
        err ? reject(err) : resolve(result)));
}

// promiseFooFn(options).then(result => {
// //  console.log("Function boddy!! When successful!!")    
// }).catch(err => {
//     console.error(err);
// });


// standard way to handle all those errors seemlessly
const handlePromisify = async () => {
    try {
        const result = await promiseFooFn(options);
        console.log("Success!!", result)
        process.exit(1);
    } catch(err) {
        console.error(err);
        process.exit(0);
    }
} 

handlePromisify();


// /// Unhandled errors with eventListeners
// window.addEventListener("unhandledrejection", event => console.log("Unhandled rejection!!"));
// window.addEventListener("rejectionhandled", event => console.log("Rejection handled!!"));

// var p = Promise.reject("Test");

setTimeout(() => p.catch(console.log), 10000);


process.on("rejectionhandled", (reason, promise) => {
    handlePromisify();
});
process.on("unhandledRejection", (reason, promise) => {});


// Recociling asynchronous and synchronous operations
// fetching data from APIs

// declarations

let result = null;
var planetsURL = `${process.env.PLANETSURL}`;
// var planetsURL = 'http://swapi.co/api/planets/';

let cachedPromise;

var fetchPromise = result ? Promise.resolve(result) : fetchResult();

fetchPromise.then(processResult);



// incase we have result already
if (result ) { 
    processResult(result);
} else {
    fetchResult().then(processResult).catch(console.error);
}


function fetchResult() {
   
    if (!cachedPromise) {
        cachedPromise = fetch(planetsURL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response not OK!");
            }
            return response.json();
        })
        .catch((e) => {
            cachedPromise = null;
            throw e;
        })
  }

  return cachedPromise;
}

console.log("🔗 Fetching from:", planetsURL);


console.log(fetchResult());




function processResult(data) {
    console.log("Planets data received successfully!!");
    console.log("Here is the raw data from the API:", data);

        if (!data || !Array.isArray(data.results)) {
            console.error("❌ Invalid data structure! Expected `data.results` to be an array.");
            return;
        }
    

    data.results.forEach((planet, index) => {
        console.log(`${index + 1}. ${planet.name}`);
    });
}

console.log(processResult(result));