export declare const awards: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "users_awards";
    schema: "data";
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "users_awards";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        uid: import("drizzle-orm/pg-core").PgColumn<{
            name: "uid";
            tableName: "users_awards";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        award: import("drizzle-orm/pg-core").PgColumn<{
            name: "award";
            tableName: "users_awards";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        awardedAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "awarded_at";
            tableName: "users_awards";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const awardsRelations: import("drizzle-orm").Relations<"users_awards", {
    account: import("drizzle-orm").One<"users_accounts", false>;
}>;
//# sourceMappingURL=awards.d.ts.map