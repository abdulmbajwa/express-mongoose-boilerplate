const express = require("express");
const {
    getUsers,
    createUser,
    deleteUser,
    updateUser
  } = require("../controllers/userController");  
const router = express.Router();

//user routes
router.get("/user", getUsers);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);


module.exports = router;