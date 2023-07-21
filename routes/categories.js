const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/categoryController");

router.get(`/`, CategoryController.getall);

router.get("/:id", CategoryController.getOne);

router.put("/:id", CategoryController.update);

router.post("/", CategoryController.create);

router.delete("/:id", CategoryController.remove);

module.exports = router;
