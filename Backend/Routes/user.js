const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");
const {updateUser, deleteUser, getUserbyId, getAllUser, getStats} = require("../Controller/userController")
const router = require("express").Router();




router.put("/:id", verifyTokenAndAuth, updateUser);
router.delete("/:id", verifyTokenAndAuth,deleteUser);
router.get("/find/:id", verifyTokenAndAdmin, getUserbyId )
router.get("/", verifyTokenAndAdmin, getAllUser )
router.get('/stats', verifyTokenAndAdmin, getStats)

module.exports = router;

