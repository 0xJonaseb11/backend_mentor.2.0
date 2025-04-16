// const { error } = require("console");
// const { resolve } = require("path");

// const username = "Etiene";
// const Password = "Etiene13";
// const isRestricted = false;
// //const isValid = true;
// let messages = "Allowed";
// const promise = new Promise((resolve, reject) => {

//     if(username.isValid && Password.isValid && isRestricted) {

//        resolve(messages);
//     }

//     else {

//      let msg = "Access Canceled";
//      let mgs3 = new Error(msg);
//        reject(mgs3);
//     }
// });

function seconds() {

return new Promise(resolve => setTimeout(resolve, 2000));
}

const message = seconds(6000)
.then(() => seconds(4000)).then(() => seconds(2000)).then(() => console.log("6sec Left"));
