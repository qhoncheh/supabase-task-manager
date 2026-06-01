create table tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  is_done boolean default false,
  user_id uuid references auth.users not null,
  created_at timestamptz default now()
);