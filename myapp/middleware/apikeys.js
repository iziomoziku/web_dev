const users = require("../user.json").users;
const MAX = process.env.API_MAX || 5;

const validateKey = (req, res, next) => {
  let apikey = req.body.api_key;
  let account = users.find((user) => user.apikey === apikey);
  if (account) {
    let today = new Date().toISOString().split("T")[0];
    let usage = account.usage.findIndex((day) => day.date === today);
    if (usage >= 0) {
      if (account.usage[usage].count >= MAX) {
        //stop and respond
        res.status(429).send({
          error: {
            code: 429,
            message: "Max API calls exceeded.",
          },
        });
      } else {
        //have not hit todays max usage
        account.usage[usage].count++;
        // console.log("Good API call", account.usage[usage]);
        next();
      }
    } else {
      //not today yet
      account.usage.push({ date: today, count: 1 });
      //ok to use again
      next();
    }
  } else {
    //stop and respond
    res.status(403).send({
      error: {
        code: 403,
        message: "You need to signup to get your unique API.",
      },
    });
    // res.status(403).send("ERROR! You are not allowed");
  }
};

module.exports = { validateKey };
