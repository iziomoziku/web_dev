const bcrypt = require("bcrypt");
var express = require("express");
var router = express.Router();

let users = require("../user.json");
users = users.users;

const genKey = () => {
  //create a base-36 string that is always 30 chars long a-z0-9
  // 'an0qrr5i9u0q4km27hv2hue3ywx3uu'
  return [...Array(30)]
    .map((e) => ((Math.random() * 36) | 0).toString(36))
    .join("");
};

router.get("/", function (req, res) {
  res.render("signup");
});

router.post("/", async (req, res) => {
  let today = new Date().toISOString().split("T")[0];
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = {
      id: Date.now(),
      apikey: genKey(),
      email: req.body.email,
      password: hashedPassword,
      usage: [{ date: today, count: 0 }],
    };
    users.push(user);
    console.log(users);
    res.status(201).render("login");
  } catch {
    res.status(501).send();
  }
});

//export this router to use in our index.js
module.exports = router;
