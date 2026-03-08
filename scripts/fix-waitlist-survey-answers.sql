-- waitlist_entries.survey_answers: cast to jsonb (run in Supabase SQL editor if drizzle push fails on this column)

ALTER TABLE waitlist_entries
ALTER COLUMN survey_answers TYPE jsonb
USING CASE
  WHEN survey_answers IS NULL THEN NULL
  WHEN survey_answers = '' THEN NULL
  ELSE survey_answers::jsonb
END;
