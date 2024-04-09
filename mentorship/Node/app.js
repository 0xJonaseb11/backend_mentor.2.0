// fs
const { error } = require("console");
const fs = require("fs");

// creating a file
fs.writeFile(
  "app.pdf",
  "Yooooo, this is the finished version of frontend. i will give you more later",
  (error) => {
    if (error) {
      console.log("Error occurred while creating file", error);
    } else {
      console.log("app.txt file created successfully");
    }
  }
);

// read the content of our file
fs.readFile("app.pdf", "utf-8", (error, data) => {
  if (error) {
    console.log("An error occurred while reading file", error);
  } else {
    console.log(data);
  }
});

// renaming a file
fs.rename("app.pdf", "app.md", (error) => {
  if (error) {
    console.log("An error occurred while renaming file", error);
  } else {
    console.log("File app.pdf was renamed to app.md successfully");
  }
});

// deleting a file
fs.unlink("app.pdf", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("app.pdf file deleted successfully");
  }
});

fs.appendFile(
  "app.md",
  " Mehnn please don't forget to install the dependencies. use ```sh npm install --save express dontenv axios http```",
  (error, data) => {
    if (error) {
      console.log("Sorry, an error occurred while trying to append data");
    } else {
      console.log("Data appended successfully\n", data);
    }
  }
);

// make directory
// fs.writeFileSync("app.md", "app.sol", "utf-8", (error) => {
//     if (error) {
//         console.log("An error occurred while writing file with sync", error);
//     } else {
//         console.log("File synced successfully")
//     }
// })

// creating directory
fs.mkdir("./aime/ourApp.html", (error) => {
  if (error) {
    console.log("An error occurred while creating directory", error);
  } else {
    fs.writeFile(
      "./ourApp.html",
      " hello there, this is mee - kevin",
      (error) => {
        if (error) {
          console.log("AN error occurred", error);
        } else {
          console.log("File directory created successfully");
        }
      }
    );
  }
});

// const names = {
//     "name": "jonas",
//     "id" : 234
// }

// if (names in names) {
//     console.log("Found it")
// }

// // of

// if (let name of names) {
//     console.log("it is probably there")
// }

// read directory
fs.readdir("./aime", (error, files) => {
  if (error) {
    console.error("An error occurred while reading directory", error);
  } else {
    console.log(files);
    for (let file in files) {
      fs.writeFile("./aime/aime.pdf", file, (error) => {
        if (error) {
          console.log(error);
        } else console.log("File created successfully");
      });
      fs.unlink("./aime/ourApp.html", (error) => {
        if (error) {
          console.log("An error occurred will deleting file", error);
        } else {
          console.log(files);
        }
      });

      fs.readdir("./aime", (error, files) => {
        if (error) {
          console.log("ERROR", error);
        } else {
          console.log(files);
          for (file of files) {
            fs.unlink("aime", (error) => {
              if (error) {
                console.error(error);
              } else {
                console.log("FIle deleted successfully");
              }
            });
          }
        }
      });
    }
  }
});

// READABLE AND WRITABLE STREAMS
