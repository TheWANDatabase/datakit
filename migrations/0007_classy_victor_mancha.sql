ALTER TABLE "data"."timestamped_events" ADD COLUMN "episode" varchar NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."timestamped_events" ADD CONSTRAINT "timestamped_events_episode_episodes_id_fk" FOREIGN KEY ("episode") REFERENCES "data"."episodes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
