var express = require("express");
var router = express.Router();
let data = require("../data.json");
// const users = require("../user.json").users;
const API = require("../middleware/apikeys");

router.get("/", function (req, res) {
  res.send("I am goodlooking");
});

router.post("/", API.validateKey, (req, res) => {
  req = req.body;
  let index = parseInt(req.number);
  res.send(data.Quotes[index - 1]);
});

//export this router to use in our index.js
module.exports = router;
