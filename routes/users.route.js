const express = require("express");
const { getUser, saveUser } = require("../controller/users.controller");
const router = express.Router();
//GET request
router.get("/users", getUser);
//POST request
router.post("/users", saveUser);

module.exports = router;
