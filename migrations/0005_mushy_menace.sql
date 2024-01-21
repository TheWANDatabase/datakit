ALTER TABLE "data"."episodes_markers" RENAME COLUMN "has_webvtt" TO "youtube_captions";--> statement-breakpoint
ALTER TABLE "data"."episodes_markers" ADD COLUMN "floatplane_captions" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "data"."episodes_markers" DROP COLUMN IF EXISTS "has_thumbnail";--> statement-breakpoint
ALTER TABLE "data"."episodes_markers" DROP COLUMN IF EXISTS "has_audio_on_demand";--> statement-breakpoint
ALTER TABLE "data"."episodes_markers" DROP COLUMN IF EXISTS "has_video_on_demand";