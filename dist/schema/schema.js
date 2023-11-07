"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.managementSchema = exports.dataSchema = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.dataSchema = (0, pg_core_1.pgSchema)('data');
exports.managementSchema = (0, pg_core_1.pgSchema)('management');
