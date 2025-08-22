const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.get("/:id", userController.findUserById);

module.exports = router;