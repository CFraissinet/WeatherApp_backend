var express = require("express");
var router = express.Router();

const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");

router.post("/signup", (req, res) => {
  console.log(req.body);
  //console.log(req.body.email + " " + req.body.password);
  if (checkBody(req.body, ["name", "email", "password"])) {
    if (req.body.email && req.body.password) {
      User.findOne({ email: req.body.email }).then((data) => {
        if (data) {
          res.json({ result: false, error: "User already exists" });
        } else {
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          });

          newUser.save().then(() => {
            res.json({ result: true });
          });
        }
      });
    } else {
      res.json({ result: false, error: "Missing or empty fields" });
    }
  } else {
    console.log("foire");
    res.json({ result: false, error: "Missing or empty fields" });
  }
});

router.post("/signin", (req, res) => {
  if (checkBody(req.body, ["email", "password"])) {
    if (req.body.email && req.body.password) {
      User.findOne({
        email: req.body.email,
        password: req.body.password,
      }).then((data) => {
        if (data) {
          res.json({ result: true });
        } else {
          res.json({ result: false, error: "User not found" });
        }
      });
    } else {
      res.json({ result: false, error: "Missing or empty fields" });
    }
  } else {
    res.json({ result: false, error: "Missing or empty fields" });
  }
});

module.exports = router;
