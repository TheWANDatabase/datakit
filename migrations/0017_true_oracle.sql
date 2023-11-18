CREATE TABLE IF NOT EXISTS "management"."logs"
(
    "time"    timestamp PRIMARY KEY DEFAULT now() NOT NULL,
    "source"  text                                NOT NULL,
    "level"   text                                NOT NULL,
    "message" text                                NOT NULL,
    "meta"    jsonb,
    CONSTRAINT "logs_time_unique" UNIQUE ("time")
);
--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    ADD COLUMN "current_text_imminence" text NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    ADD COLUMN "title" text;--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    ADD COLUMN "sponsors" jsonb;--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    ADD COLUMN "thumbnail" text;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "time_idx" ON "management"."logs" ("time");