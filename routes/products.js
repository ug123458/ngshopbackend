const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = require("../helpers/storage");
const ProductController = require("../controllers/productController");

const uploadOptions = multer({ storage: storage });

router.get(`/`, ProductController.getall);

router.get(`/:id`, ProductController.getOne);

router.post(`/`, uploadOptions.single("image"), ProductController.create);

router.put("/:id", uploadOptions.single("image"), ProductController.update);

router.delete("/:id", ProductController.remove);

router.get(`/get/count`, ProductController.getproductcount);

router.get(`/get/featured/:count`, ProductController.getfeatured);

router.put(
  "/gallery-images/:id",
  uploadOptions.array("images", 10),
  ProductController.uploadgallery
);

module.exports = router;
