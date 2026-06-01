# Supabase Task Manager

A simple Task Manager application built with Next.js and Supabase to explore authentication, PostgreSQL, Row Level Security (RLS), migrations, and CRUD operations.

## Features

* User Registration
* User Login / Logout
* Create Tasks
* View Tasks
* Update Task Status (Done / Undo)
* Delete Tasks
* PostgreSQL Database
* Supabase Authentication
* Row Level Security (RLS)
* Database Migrations
* Local Supabase Development Environment
* Bun Compatibility

## Tech Stack

* Next.js
* React
* TypeScript
* Supabase
* PostgreSQL
* Docker
* Bun

---

## Project Structure

```bash
app/
├── page.tsx
├── dashboard/
│   └── page.tsx

src/
└── lib/
    └── supabase.ts

supabase/
└── migrations/
```

---

## Database

### Tasks Table

| Column     | Type        |
| ---------- | ----------- |
| id         | uuid        |
| title      | text        |
| is_done    | boolean     |
| user_id    | uuid        |
| created_at | timestamptz |

---

## Security

Row Level Security (RLS) is enabled.

Implemented policies:

* Users can view their own tasks
* Users can insert their own tasks
* Users can update their own tasks
* Users can delete their own tasks

---

## Running Supabase Locally

Start local Supabase services:

```bash
npx supabase start
```

Supabase Studio:

```text
http://127.0.0.1:54323
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd supabase-task-manager
```

Install dependencies:

### Using npm

```bash
npm install
```

### Using Bun

```bash
bun install
```

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

---

## Run Development Server

Using npm:

```bash
npm run dev
```

Using Bun:

```bash
bun run dev
```

---

## Database Migrations

Create migration:

```bash
npx supabase migration new create_tasks
```

Apply migrations:

```bash
npx supabase db reset
```

---

## What I Learned

During this project I gained hands-on experience with:

* Supabase Local Development
* PostgreSQL
* Authentication
* Row Level Security (RLS)
* Database Policies
* Migrations
* Next.js Integration
* Docker
* Bun Runtime

---

## Author

Ataei
