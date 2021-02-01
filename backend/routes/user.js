const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();

//SIGNUP ROUTE
router.post("/signup", UserController.createUser);

//LOGIN ROUTE
router.post("/login", UserController.userLogin);

module.exports = router;
