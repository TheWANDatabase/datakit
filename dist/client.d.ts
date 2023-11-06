import { NodePgDatabase } from "drizzle-orm/node-postgres";
import 'dotenv/config';
export * as dataSchema from "./data-schema";
export * as managementSchema from "./management-schema";
export declare class Client {
    private readonly dataPool;
    private readonly managementPool;
    data: NodePgDatabase<Record<string, never>>;
    management: NodePgDatabase<Record<string, never>>;
    constructor();
    migrate(db: NodePgDatabase<Record<string, never>>, migrationsFolder: string): Promise<void>;
}
//# sourceMappingURL=client.d.ts.map