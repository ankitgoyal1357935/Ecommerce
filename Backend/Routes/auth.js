const router = require("express").Router();
const{register,login} = require("../Controller/loginsignupController")
//Register 

router.post("/register",register)
router.post("/login",login)

module.exports = router