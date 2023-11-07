export declare const transcripts: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "episodes_transcripts";
    schema: "data";
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "episodes_transcripts";
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
            tableName: "episodes_transcripts";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        filename: import("drizzle-orm/pg-core").PgColumn<{
            name: "filename";
            tableName: "episodes_transcripts";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        started: import("drizzle-orm/pg-core").PgColumn<{
            name: "started";
            tableName: "episodes_transcripts";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        completed: import("drizzle-orm/pg-core").PgColumn<{
            name: "completed";
            tableName: "episodes_transcripts";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        revised: import("drizzle-orm/pg-core").PgColumn<{
            name: "revised";
            tableName: "episodes_transcripts";
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
export declare const transcriptRelations: import("drizzle-orm").Relations<"episodes_transcripts", {
    episode: import("drizzle-orm").One<"episodes", false>;
    speakers: import("drizzle-orm").Many<"episodes_speakers">;
}>;
//# sourceMappingURL=transcripts.d.ts.map