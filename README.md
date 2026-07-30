# LinkEarn

A modern gaming rewards platform built with [Next.js](https://nextjs.org) and [Supabase](https://supabase.com).

## Getting Started

### 1. Environment Variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Then open `.env.local` and add your values:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

You can find these in your Supabase project dashboard under **Settings > API**.

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.
