create table if not exists profiles (
  id uuid primary key,
  full_name text not null,
  email text unique not null,
  avatar_url text,
  total_score int default 0,
  created_at timestamptz default now()
);

create table if not exists gi_progress (
  id bigint generated always as identity primary key,
  user_id uuid references profiles(id) on delete cascade,
  gi_code text not null,
  game_index int not null check (game_index between 1 and 5),
  status text not null default 'pending' check (status in ('pending', 'done')),
  score int not null default 0,
  updated_at timestamptz default now()
);

create table if not exists certificates (
  id bigint generated always as identity primary key,
  user_id uuid references profiles(id) on delete cascade,
  final_score int not null,
  issued_at timestamptz default now(),
  pdf_url text
);
