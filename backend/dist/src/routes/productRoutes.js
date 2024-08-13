"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producControoler_1 = require("../controllers/producControoler");
const router = (0, express_1.Router)();
router.get("/", producControoler_1.getProducts);
router.post("/", producControoler_1.createProducts);
exports.default = router;
