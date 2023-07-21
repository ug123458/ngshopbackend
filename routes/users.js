const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get(`/`, UserController.getall);

router.get(`/:id`, UserController.getone);

router.post("/register", UserController.register);

router.post("/login", UserController.login);

router.post("/", UserController.create);

router.put("/:id", UserController.update);

router.delete("/:id", UserController.remove);

router.get(`/get/count`, UserController.count);

module.exports = router;
