CREATE TABLE IF NOT EXISTS "management"."cdn" (
	"time" timestamp PRIMARY KEY DEFAULT now() NOT NULL,
	"entity_size_total" integer NOT NULL,
	"entity_size_delta" integer NOT NULL,
	"entity_size_average" numeric NOT NULL,
	"entity_count_total" integer NOT NULL,
	"entity_count_delta" integer NOT NULL,
	"entity_count_average" numeric NOT NULL,
	"queue_backlog_total" integer NOT NULL,
	"queue_backlog_delta" integer NOT NULL,
	"queue_backlog_average" numeric NOT NULL,
	"entity_counts_by_type" jsonb DEFAULT '{}'::jsonb NOT NULL,
	CONSTRAINT "cdn_time_unique" UNIQUE("time")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "time_idx" ON "management"."cdn" ("time");--> statement-breakpoint
ALTER TABLE "management"."stats" DROP COLUMN IF EXISTS "entity_size";--> statement-breakpoint
ALTER TABLE "management"."stats" DROP COLUMN IF EXISTS "entity_size_delta";--> statement-breakpoint
ALTER TABLE "management"."stats" DROP COLUMN IF EXISTS "entity_count";--> statement-breakpoint
ALTER TABLE "management"."stats" DROP COLUMN IF EXISTS "entity_count_delta";--> statement-breakpoint
ALTER TABLE "management"."stats" DROP COLUMN IF EXISTS "queue_backlog";--> statement-breakpoint
ALTER TABLE "management"."stats" DROP COLUMN IF EXISTS "queue_backlog_delta";--> statement-breakpoint
ALTER TABLE "management"."stats" DROP COLUMN IF EXISTS "entity_counts_by_type";