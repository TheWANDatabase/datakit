ALTER TABLE "data"."timestamped_events" ADD COLUMN "depth" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."timestamped_events" DROP COLUMN IF EXISTS "parent";