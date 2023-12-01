CREATE TABLE IF NOT EXISTS "data"."users_awards"
(
    "id"         serial PRIMARY KEY NOT NULL,
    "uid"        integer,
    "award"      text,
    "awarded_at" timestamp DEFAULT now(),
    CONSTRAINT "users_awards_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_idx" ON "data"."users_awards" ("uid");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "award_idx" ON "data"."users_awards" ("award");--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."users_awards"
            ADD CONSTRAINT "users_awards_uid_users_accounts_id_fk" FOREIGN KEY ("uid") REFERENCES "data"."users_accounts" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
