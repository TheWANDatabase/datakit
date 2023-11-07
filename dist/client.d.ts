import { NodePgDatabase } from "drizzle-orm/node-postgres";
import 'dotenv/config';
export * as dataSchema from "./schema";
export declare class Client {
    private readonly dataPool;
    data: NodePgDatabase<Record<string, never>>;
    constructor();
    migrate(migrationsFolder: string): Promise<void>;
}
//# sourceMappingURL=client.d.ts.map