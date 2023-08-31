const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/orderController");

router.get(`/`, OrderController.getall);

router.get(`/:id`, OrderController.getone);

router.post("/", OrderController.create);

router.put("/:id", OrderController.update);

router.delete("/:id", OrderController.remove);

router.get("/get/totalsales", OrderController.totalsales);

router.get(`/get/count`, OrderController.count);

router.get(`/get/userorders/:userid`, OrderController.userorders);

router.post("/create-checkout-session", OrderController.createCheckoutSession);

module.exports = router;
