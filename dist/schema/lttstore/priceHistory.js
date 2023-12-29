"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.productPriceHistory = void 0;
const schema_1 = require("../schema");
// TODO: Add price history tables for products, and also variants
// Include product/variant ID, stock status, sale status, price, sale price, time (hour aligned),
exports.productPriceHistory = schema_1.dataSchema.table('', {});
