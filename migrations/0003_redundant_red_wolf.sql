DO $$ BEGIN
 CREATE TYPE "kind" AS ENUM('topic', 'merch message', 'sponsor', 'tangent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "data"."topics" ADD COLUMN "ref" text;--> statement-breakpoint
ALTER TABLE "data"."topics" ADD COLUMN "kind" "kind" DEFAULT 'topic';