ALTER TABLE "data"."cast_members"
    ALTER COLUMN "priority" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "data"."cast_members"
    ALTER COLUMN "priority" DROP NOT NULL;