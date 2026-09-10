-- Extra games-db tables for golden (reviews) and zeppelin-vs-beatles (chamber votes).

CREATE TABLE IF NOT EXISTS golden_place_reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  place_key TEXT NOT NULL,
  place_name TEXT NOT NULL,
  latitude REAL NOT NULL,
  longitude REAL NOT NULL,
  city TEXT,
  country TEXT,
  mode TEXT NOT NULL DEFAULT 'either',
  rating INTEGER NOT NULL,
  author_name TEXT NOT NULL,
  body TEXT NOT NULL,
  tips TEXT,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS golden_place_reviews_place_key_idx
  ON golden_place_reviews (place_key);
CREATE INDEX IF NOT EXISTS golden_place_reviews_created_at_idx
  ON golden_place_reviews (created_at DESC);

CREATE TABLE IF NOT EXISTS golden_curated_spots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  place_key TEXT NOT NULL UNIQUE,
  place_name TEXT NOT NULL,
  latitude REAL NOT NULL,
  longitude REAL NOT NULL,
  city TEXT,
  country TEXT,
  category TEXT NOT NULL DEFAULT 'Viewpoint',
  best_for TEXT NOT NULL DEFAULT 'either',
  blurb TEXT NOT NULL,
  why TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS zeppelin_chamber_votes (
  voter_id TEXT PRIMARY KEY,
  side TEXT NOT NULL,
  beatles_score INTEGER NOT NULL,
  zeppelin_score INTEGER NOT NULL,
  scores_json TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS zeppelin_chamber_votes_side_idx
  ON zeppelin_chamber_votes (side);

CREATE TABLE IF NOT EXISTS zeppelin_chamber_visitors (
  visitor_id TEXT PRIMARY KEY,
  first_seen INTEGER NOT NULL
);
