DO $$ BEGIN
 CREATE TYPE "event_type" AS ENUM('control', 'topic', 'child_topic', 'sponsor_spot', 'merch_message', 'after_dark', 'tangent', 'unknown');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."timestamped_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"event_type" "event_type" NOT NULL,
	"metadata" jsonb,
	"title" text NOT NULL,
	"parent" uuid,
	"start" integer DEFAULT 0 NOT NULL,
	"end" integer DEFAULT 0 NOT NULL,
	"created" timestamp DEFAULT now() NOT NULL,
	"modified" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "timestamped_events_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "data"."episodes" ADD COLUMN "youtube_captions" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "data"."episodes" ADD COLUMN "floatplane_captions" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "data"."episodes" ADD COLUMN "has_guest" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "data"."episodes" ADD COLUMN "is_live" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "data"."episodes" ADD COLUMN "has_content_warning" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "data"."episodes" ADD COLUMN "is_corrupt" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "data"."episodes" ADD COLUMN "has_merch_messages" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "data"."episodes" ADD COLUMN "has_product_launch" boolean DEFAULT false;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "content_warning_idx" ON "data"."episodes" ("has_content_warning");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "corruption_warning_idx" ON "data"."episodes" ("is_corrupt");--> statement-breakpoint
ALTER TABLE "data"."episodes" DROP COLUMN IF EXISTS "topic_count";--> statement-breakpoint
ALTER TABLE "data"."episodes" DROP COLUMN IF EXISTS "host_count";--> statement-breakpoint
ALTER TABLE "data"."episodes" DROP COLUMN IF EXISTS "sponsor_count";--> statement-breakpoint
ALTER TABLE "data"."episodes" DROP COLUMN IF EXISTS "merch_message_count";