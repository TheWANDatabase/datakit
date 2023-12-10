ALTER TABLE "data"."cast_members"
    ADD COLUMN "priority" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."cast_members"
    ADD CONSTRAINT "cast_members_priority_unique" UNIQUE ("priority");