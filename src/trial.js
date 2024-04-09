const trial = require("./trial");
const EventEmitter = require("events");
const readline = require("readline");
const fs = require("fs");
const zlib = require("zlib");
const http = require("http");
const lodash = require("lodash");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const joi = require("joi");
const trial_app = express();

console.log(trial);
console.log(trial.sum(9, 9));
console.log(trial.PI);
console.log(new trial.SomeMathObj());

const eventEmitter = new EventEmitter();
eventEmitter.on("trial", (num1, num2) => {
  console.log("Tutorial event triggered!!\n");
});

eventEmitter.emit("trial", 12, 20);

class Person extends EventEmitter {
  constructor() {
    super();
  }
  get name() {
    return this._name();
  }
}
let Jaz = new Person("Jaz");
let Baddext = new Person("Baddext");

//return each person
Jaz.on("name", () => {
  console.log("First person is : " + Jaz.name);
});
Baddext.on("name", () => {
  console.log("Second person name is : " + Pedro.name);
});
//To get codes executed synchronously, :
// Jaz.emit('name');
// Baddext.emit('name');

//READLINE MODULE: Getting user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let result = num1 + num2;

//question to display

rl.question(
  `What is ${num1} + ${num2} ?\n`,
  (userInput) => {
    console.log(userInput);
    setTimeout(() => {
      if (userInput.trim() == result) {
        rl.close();
      } else {
        rl.setPrompt("Incorrect response, Please try again\n");
        rl.prompt();
        rl.on("line", (userInput) => {
          if (userInput.trim() == result) {
            rl.close();
          } else {
            rl.setPrompt(
              `Your Answer of ${userInput} is incorrect. Please try again\n`
            );
            rl.prompt();
          }
        });
      }
    });
    rl.on("close", () => {
      console.log("You made it MY GEE! Congrats buddy!!\n");
    });
  },
  2000
);

//file system module || creating a file
fs.writeFile(
  "trial.txt",
  "File created by fs.write file system method",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File was successfully created");
    }
  }
);
//Reading a file
fs.readFile("trial.txt", { encoding: "utf-8" }, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
//Renaming a file
fs.rename("trial.txt", "triall.txt", (error, file) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File was successfully created\n");
  }
});

///Appending a file
fs.appendFile(
  "triall.txt",
  " Continuation to the recently created file; triall.txt is right attached here\nby fs.appendFile the file system method used to append a file\n",
  (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File was successfully appended by fs.appendFile method");
    }
  }
);
//deleting a file
fs.unlink("trial.txt", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("file was successfully deleted by fs.unlink method");
  }
});
//Making a directory
fs.mkdir("./Nodejs/tryIt.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    fs.writeFile("./Nodejs/perfect.txt", (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Successfully created file in Nodejs directory\n");
      }
    });
  }
});
//READABLE AND WRITABLE STREAMS
const readStream = fs.createReadStream("./triall.txt", "utf-8");
const writeStream = fs.createWriteStream("trialll.txt");

//listen for events
readStream.on("data", (chunk) => {
  setTimeout(() => {
    console.log(chunk);
    writeStream.write(chunk);
  }, 3000);
});
//PIPES AND PIPE CHAINING
const _ReadStream = fs.createReadStream("./triall.txt", "utf-8");
const _writeReadStream = fs.createWriteStream("trialll.txt");
// pipe /**readstream is the source && writestream is the destination */
readStream.pipe(writeStream);

// /**Zlib module */
// const Gzip = zlib.createGzip();
// const Gunzip = zlib.createGunzip();
// readStream.pipe(Gzip).pipe(writeStream);
// readStream.pipe(Gunzip).pipe(writeStream);

// //Streaming files for zipped-piped files
// const readStream_Zip = fs.createReadStream('./triall.txt','utf-8');
// const writeStream_zipped = fs.createWriteStream('./triall.gz');

// //Streaming files for Unzipped
// const writeStream_zip = fs.createReadStream('./triall.txt');
// const writeStream_Unzip = fs.createWriteStream('trialll.gz');

//http module
const server = http.createServer((req, res) => {
  res.write("Hello buddies, This is Nodejs Road to MERN stack fullstack");
  console.log("Successfully created server\n");

  /**To give the specific server */
  if (req.url === "/") {
    res.write("Listening on port 3000...");
  } else {
    res.end("Unable to reach the specified domain");
  }
});
server.listen(3000);

/**http module on static files */ //|| html fill
http
  .createServer((req, res) => {
    const readstream_html = fs.createReadStream("./static/index.html");
    res.writeHead(200, { "content-type": "text/html" });

    //JSON file header
    const readStream_json = fs.createReadStream("./static/package.json");
    res.writeHead(200, { "content-type": "application" });

    const readStream_image = fs.createReadStream("./static/messi.png");
    res.writeHead(200, { "content-type": "image/png" });

    //trying to chain pipes through response
    readstream_html.pipe(res);
    readStream_image.pipe(res);
    readStream_json.pipe(res);

    //Sending response to the server
    res.write("Listening on port 4000...");
    res.end();
  })
  .listen(4000);

//EXPRESS WEB FRAMEWORK

//Get method
trial_app
  .get("/", (req, res) => {
    res.send("Over...over...First route underway");
  })
  .listen(5000);

//routes
trial_app.get("/example", (req, res) => {
  res.send("Hitting example route");
});
trial_app.get("/example/:name/:age", (req, res) => {
  console.log(req.params);
  console.log(req.query); // initially prints empty object
  res.send(req.params.name + ":" + req.params.age);
});

//Serving static files with express
trial_app.use("/public", express.static(path.join(__dirname, "static")));
trial_app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "form.html"));
});

//POST request
trial_app.use(bodyParser.urlencoded({ extended: false }));
trial_app.post("/", (req, res) => {
  console.log(req.body);
  //DATABASE WORK HERE
  res.send("Successfully posted data");
});
//Json data
trial_app.use(bodyParser.json());
trial_app.post("/", (req, res) => {
  console.log(req.body);
  //Database work here
  res.json({ success: true });
});

//USER INPUT VALIDATION
const schema = joi.object().keys({
  email: joi.string().trim().email().required(),
  password: joi.string().max(10).min(5).required(),
});
//Validation
trial_app.use("/validation", (req, res) => {
  joi.validate(req.body, schema, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send("Successfully posted valid data");
    }
  });

  //Advanced validation
  const arrString = ["banana", "bacon", "cheese"];
  const arrObject = [{ example: "example_1" }, { example: "example_2" }];
  const userInput = {
    personalInfo: {
      streetAddress: "kk509",
      city: "Kucyaro",
      state: "Texas",
    },
    preferences: arrString,
  };
  //PersonalInfo schema
  const personalInfoSchema = joi.object().keys({
    streetAddress: joi.string().trim().required(),
    city: joi.string().trim().required(),
    state: joi.string().trim().length(6).required(),
  });
  //Preferences schema
  const preferencesSchema = joi.array().items(joi.string());
  //Trying to relate the schemas created
  const schemaRelation = joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema,
  });
  //The very validation
  joi.validate(userInput, schemaRelation, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});

//Middleware
//refers to the code that is executed btn the user and the server itself
trial_app.use(bodyParser.json);
trial_app.use("/example", (req, res, next) => {
  console.log(req.url, req.method);
  next();
});

trial_app.use((req, res, next) => {
  req.banana = "banana";
  res.send("Middleware");
});

//Express router
//helps us to separate our code in different files to be easy to manage

const pple = require("../routes/pple");
trial_app.use("./pple", pple);
trial_app.listen(6000);
