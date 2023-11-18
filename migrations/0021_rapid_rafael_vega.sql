ALTER TABLE "management"."logs"
    DROP CONSTRAINT "logs_time_unique";--> statement-breakpoint
DROP INDEX IF EXISTS "time_idx";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "source_idx" ON "management"."logs" ("source");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "level_idx" ON "management"."logs" ("level");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "meta_idx" ON "management"."logs" ("meta");--> statement-breakpoint
ALTER TABLE "management"."logs"
    DROP COLUMN IF EXISTS "time";