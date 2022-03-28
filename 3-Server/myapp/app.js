let express = require("express");
let data = require("./data.json");
let bodyParser = require("body-parser");
let multer = require("multer");
var upload = multer();
let expressLayouts = require("express-ejs-layouts");
let app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("layout");
});

app.get("/signup", function (req, res) {
  res.render("signup");
});

app.post("/get", (req, res) => {
  req = req.body;
  let index = parseInt(req.number);
  res.send(data.Quotes[index - 1]);
});

app.get("/getAPI", function (req, res) {
  res.render("api");
});

app.listen(PORT);
