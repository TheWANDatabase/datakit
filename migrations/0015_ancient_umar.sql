ALTER TABLE "data"."lttstore_products"
    ADD COLUMN "superseded_by" varchar(128) DEFAULT '' NOT NULL;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "aired_idx" ON "data"."episodes" ("aired");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "duration_idx" ON "data"."episodes" ("duration");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "title_idx" ON "data"."episodes" ("title");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "content_warning_idx" ON "data"."episodes_markers" ("has_content_warning");