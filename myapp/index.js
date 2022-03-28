let express = require("express");
let bodyParser = require("body-parser");
let multer = require("multer");
var upload = multer();
let app = express();
const port = 3000;

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

// app.use(express.static("public"));

let signup = require("./routes/signup.js");
let get = require("./routes/get.js");
let home = require("./routes/home.js");
let login = require("./routes/login.js");

app.use("/signup", signup);
app.use("/login", login);
app.use("/get", get);
app.use("/", home);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
