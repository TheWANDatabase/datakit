ALTER TABLE "data"."episodes"
    ADD COLUMN "intro_start" integer;--> statement-breakpoint
ALTER TABLE "data"."episodes"
    ADD COLUMN "intro_duration" integer;--> statement-breakpoint
ALTER TABLE "data"."episodes"
    ADD COLUMN "pre_show_offset" integer DEFAULT 0;