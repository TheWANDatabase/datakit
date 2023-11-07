export declare const episodes: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "episodes";
    schema: "data";
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "episodes";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        floatplane: import("drizzle-orm/pg-core").PgColumn<{
            name: "floatplane";
            tableName: "episodes";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        title: import("drizzle-orm/pg-core").PgColumn<{
            name: "title";
            tableName: "episodes";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        description: import("drizzle-orm/pg-core").PgColumn<{
            name: "description";
            tableName: "episodes";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        thumbnail: import("drizzle-orm/pg-core").PgColumn<{
            name: "thumbnail";
            tableName: "episodes";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        aired: import("drizzle-orm/pg-core").PgColumn<{
            name: "aired";
            tableName: "episodes";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        duration: import("drizzle-orm/pg-core").PgColumn<{
            name: "duration";
            tableName: "episodes";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const episodesRelations: import("drizzle-orm").Relations<"episodes", {
    castMembers: import("drizzle-orm").Many<"cast_credits">;
    products: import("drizzle-orm").Many<"lttstore_product_linker">;
    sponsorSpots: import("drizzle-orm").Many<"sponsors_spots">;
    topics: import("drizzle-orm").Many<"topics">;
    merchMessages: import("drizzle-orm").Many<"merch_messages_messages">;
    thumbnail: import("drizzle-orm").One<"media", false>;
}>;
//# sourceMappingURL=episodes.d.ts.map