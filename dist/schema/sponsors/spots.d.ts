export declare const sponsorSpot: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "sponsors_spots";
    schema: "data";
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "sponsors_spots";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        episodeId: import("drizzle-orm/pg-core").PgColumn<{
            name: "episode_id";
            tableName: "sponsors_spots";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        campaignId: import("drizzle-orm/pg-core").PgColumn<{
            name: "campaign_id";
            tableName: "sponsors_spots";
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
export declare const sponsorSpotRelations: import("drizzle-orm").Relations<"sponsors_spots", {
    campaign: import("drizzle-orm").One<"sponsors_spots", false>;
    episode: import("drizzle-orm").One<"episodes", false>;
}>;
//# sourceMappingURL=spots.d.ts.map