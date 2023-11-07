export declare const credits: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "cast_credits";
    schema: "data";
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "cast_credits";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        castId: import("drizzle-orm/pg-core").PgColumn<{
            name: "cast_id";
            tableName: "cast_credits";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        positionId: import("drizzle-orm/pg-core").PgColumn<{
            name: "position_id";
            tableName: "cast_credits";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        episodeId: import("drizzle-orm/pg-core").PgColumn<{
            name: "episode_id";
            tableName: "cast_credits";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const creditsRelations: import("drizzle-orm").Relations<"cast_credits", {
    castMember: import("drizzle-orm").One<"cast_members", false>;
    position: import("drizzle-orm").One<"cast_jobs", false>;
    episode: import("drizzle-orm").One<"episodes", false>;
}>;
//# sourceMappingURL=credits.d.ts.map