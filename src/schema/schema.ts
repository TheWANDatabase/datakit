import {pgSchema} from "drizzle-orm/pg-core";

export const dataSchema = pgSchema('data');
export const managementSchema = pgSchema('management');