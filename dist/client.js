"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.dataSchema = void 0;
const pg_1 = require("pg");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const migrator_1 = require("drizzle-orm/node-postgres/migrator");
require("dotenv/config");
exports.dataSchema = __importStar(require("./schema"));
const defaultConfig = {
// ssl: {
//   rejectUnauthorized: false,
// },
};
class Client {
    dataPool;
    data;
    constructor() {
        this.dataPool = new pg_1.Pool({
            connectionString: process.env.DATABASE_URL + '/postgres',
            ...defaultConfig,
        });
        this.data = (0, node_postgres_1.drizzle)(this.dataPool);
    }
    async migrate(migrationsFolder) {
        return (0, migrator_1.migrate)(this.data, {
            migrationsFolder: migrationsFolder
        });
    }
}
exports.Client = Client;
