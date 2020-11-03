const express = require("express");
const router = express.Router();

//Login
router.get("/login", (req,res)=>{
    res.render("login.ejs")

});

//Register
router.get("/register", (req,res)=>{
    res.render("register.ejs")

});

module.exports = router;