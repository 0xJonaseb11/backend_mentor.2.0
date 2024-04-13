const express = require("express");
const restpost = express();

let stu = [
  {
    id: 5,
    name: "aime",
    age: 36,
    email: "aime@example.com",
  },
];


rest.use(bodyParser.urlencoded({ extended: true }));

rest.use(bodyParser.json);
rest.get("./", (req, res) => {
    return res.json(users);
  });
  

rest.get("/api", (req, res) => {
    return res.json(stu);
  });
  

rest.get("/api/stu", (req, res) => {
  return res.json(stu);
});


rest.post("/api/stu", (req, res) => {
  var user = req.body.user;
  users.push(stu);

  return res.send("Successfully added new stu");
});

const bodyParser = require("body-parser");
rest.listen(3000,()=>{



    console.log("MY app is listening on http://localhost:3000")
})
