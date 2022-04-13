const router = require("express").Router();
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin} = require("./verifyToken");
const{register,login, logout,account} = require("../Controller/loginsignupController")
//Register 

router.post("/register",register);
router.post("/login",login);
router.post("/logout",verifyToken,logout);
router.get("/account/me",verifyToken, account)
module.exports = router