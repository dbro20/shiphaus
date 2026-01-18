# Ideas Form - Setup Notes

## Status: Code Complete, Needs Supabase Config

The Ideas form feature has been implemented and pushed to `claude/add-ideas-form-1GWMJ`.

## What's Done
- `/ideas` page with form (dropdown for attendee, two text areas)
- Supabase client setup at `src/lib/supabase.ts`
- Shared attendees data at `src/data/attendees.ts`
- Navigation updated (desktop + mobile)
- Dependency installed (`@supabase/supabase-js`)

## What You Need To Do

### 1. Create Supabase Project
Go to https://supabase.com, create free account, new project.

### 2. Run This SQL (in Supabase SQL Editor)
```sql
create table ideas (
  id serial primary key,
  submitter text not null,
  problem text not null,
  hypothesis text not null,
  created_at timestamp with time zone default now()
);

alter table ideas enable row level security;
create policy "Anyone can insert" on ideas for insert with check (true);
create policy "Anyone can read" on ideas for select using (true);
```

### 3. Create `.env.local`
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
Get values from: Supabase Dashboard → Settings → API

### 4. View Submissions
Supabase Dashboard → Table Editor → `ideas`

## Files Changed
- `src/app/ideas/page.tsx` (new)
- `src/data/attendees.ts` (new)
- `src/lib/supabase.ts` (new)
- `src/app/who/page.tsx` (now imports shared attendees)
- `src/app/layout.tsx` (added Ideas nav link)
- `src/components/MobileNav.tsx` (added Ideas nav link)
- `package.json` (added supabase dependency)
