-- STAT course: daily usage counter for AI feedback.
-- Run once in Supabase: SQL Editor > New query > paste > Run.

create table if not exists public.ai_usage (
  user_id uuid not null references auth.users (id) on delete cascade,
  day date not null default current_date,
  kind text not null,
  n integer not null default 0,
  primary key (user_id, day, kind)
);

-- Row level security on, with no policies: browsers can't read or change this table.
alter table public.ai_usage enable row level security;

-- Adds one to today's count and returns true, or returns false if the limit is reached.
create or replace function public.ai_bump(p_user uuid, p_kind text, p_max integer)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare cur integer;
begin
  insert into public.ai_usage (user_id, day, kind, n)
  values (p_user, (now() at time zone 'Australia/Sydney')::date, p_kind, 1)
  on conflict (user_id, day, kind) do update set n = public.ai_usage.n + 1
  returning n into cur;
  if cur > p_max then
    update public.ai_usage set n = n - 1
      where user_id = p_user and day = (now() at time zone 'Australia/Sydney')::date and kind = p_kind;
    return false;
  end if;
  return true;
end;
$$;

-- Only the server-side function (service role) may call it.
revoke all on function public.ai_bump(uuid, text, integer) from public, anon, authenticated;
grant execute on function public.ai_bump(uuid, text, integer) to service_role;
