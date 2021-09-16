/*var express = require("express");
var router = express.Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const saltRounds = process.env.SALT || 10;

const isLoggedIn = require("../middleware/isLoggedIn");

router.get(":id/delete", (req, res) => {
    Country.findByIdAndDelete(req.params.id)
      .then((deletedCountry) => res.redirect("/"))
      .catch((error) => console.log(error));
  });
  
  router
    .route(":id/edit")
    .get((req, res) => {
      User.findById(req.params.id)
        .then((user) => {
          res.render("/private/:id/edit", {
            user,
          });
        })
        .catch((err) => console.log(err));
    })
    .post(":id/edit" ,(req, res) => {
      const { username, email, password } = req.body;
  
      if (
        !username ||
        username === "" ||
        !password ||
        password === "" ||
        !email ||
        email === "" ||
        !email.includes("@")
      ) {
        res.render("/auth/signup", {
          errorMessage: "Username and password are required",
        });
      }
  
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashPassword = bcrypt.hashSync(password, salt);
  
      User.findByIdAndUpdate(req.params.id, {
        username,
        email,
        password: hashPassword,
      })
        .then(() => res.redirect("/profile"))
        .catch((error) =>
          res.render("/auth/signup", {
            errorMessage: error
          })
        );
    });

  module.exports = router;*/