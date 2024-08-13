"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProducts = exports.getProducts = void 0;
const config_1 = __importDefault(require("../../config"));
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const search = (_a = req.query.search) === null || _a === void 0 ? void 0 : _a.toString();
        const products = yield config_1.default.products.findMany({
            where: {
                name: {
                    contains: search,
                },
            },
        });
        res.status(200).json(products);
    }
    catch (error) {
        next(error);
    }
});
exports.getProducts = getProducts;
const createProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, name, price, rating, stockQuantity } = req.body;
        const product = yield config_1.default.products.create({
            data: { name, price, productId, stockQuantity, rating },
        });
        res.status(200).json(product);
    }
    catch (error) {
        next(error);
    }
});
exports.createProducts = createProducts;
