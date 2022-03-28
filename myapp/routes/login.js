const bcrypt = require("bcrypt");
var express = require("express");
var router = express.Router();

let users = require("../user.json");
users = users.users;

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  const user = users.find((user) => user.email === req.body.email);
  if (user === null) {
    return res.status(400).send("Cannont find user, please signup");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      let apikey = user.apikey;
      res.send(`success: This is your api key ${apikey}. Max call is 5. Use this link to 
      get your quotes http://localhost:3000`);
    } else {
      res.send("incorrect password or email");
    }
  } catch {
    res.status(501).send();
  }
});

//export this router to use in our index.js
module.exports = router;
