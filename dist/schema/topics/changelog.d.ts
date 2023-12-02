export declare const changelog: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "topics_changelogs";
  schema: "data";
  columns: {
    topicId: import("drizzle-orm/pg-core").PgColumn<{
      name: "topic_id";
      tableName: "topics_changelogs";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    started: import("drizzle-orm/pg-core").PgColumn<{
      name: "started";
      tableName: "topics_changelogs";
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
export declare const changelogRelations: import("drizzle-orm").Relations<"topics_changelogs", {
  topic: import("drizzle-orm").One<"topics", true>;
  proposals: import("drizzle-orm").Many<any>;
}>;
//# sourceMappingURL=changelog.d.ts.map