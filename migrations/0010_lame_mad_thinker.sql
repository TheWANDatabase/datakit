CREATE TABLE IF NOT EXISTS "data"."companies_mappings"
(
    "id"       serial PRIMARY KEY NOT NULL,
    "pattern"  text               NOT NULL,
    "flags"    text    DEFAULT 'gm',
    "enabled"  boolean DEFAULT true,
    "priority" serial             NOT NULL,
    "company"  uuid,
    CONSTRAINT "companies_mappings_id_unique" UNIQUE ("id"),
    CONSTRAINT "companies_mappings_priority_unique" UNIQUE ("priority")
);
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."companies_mappings"
            ADD CONSTRAINT "companies_mappings_company_companies_id_fk" FOREIGN KEY ("company") REFERENCES "data"."companies" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
