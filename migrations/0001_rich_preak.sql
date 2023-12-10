ALTER TABLE "data"."cast_members"
    ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "data"."cast_jobs"
    ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "data"."companies"
    ALTER COLUMN "id" SET DEFAULT gen_random_uuid();