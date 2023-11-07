export declare const accounts: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "users_accounts";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "users_accounts";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        username: import("drizzle-orm/pg-core").PgColumn<{
            name: "username";
            tableName: "users_accounts";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        avatar: import("drizzle-orm/pg-core").PgColumn<{
            name: "avatar";
            tableName: "users_accounts";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        created: import("drizzle-orm/pg-core").PgColumn<{
            name: "created";
            tableName: "users_accounts";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        loggedIn: import("drizzle-orm/pg-core").PgColumn<{
            name: "logged_in";
            tableName: "users_accounts";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const accountsRelations: import("drizzle-orm").Relations<"users_accounts", {
    avatar: import("drizzle-orm").One<"media", false>;
}>;
//# sourceMappingURL=accounts.d.ts.map