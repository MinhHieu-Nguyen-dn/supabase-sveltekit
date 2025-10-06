# Project Overview

## Purpose
This is a **Supabase + SvelteKit** authentication and user management application. It demonstrates how to integrate Supabase authentication with SvelteKit, including:
- Magic link email authentication
- User profile management
- Avatar upload functionality
- Session management using Supabase SSR

## Tech Stack
- **Framework**: SvelteKit 2.43.2 (using Svelte 5.39.5)
- **Language**: TypeScript 5.9.2 with strict mode enabled
- **Authentication**: Supabase (@supabase/ssr 0.7.0, @supabase/supabase-js 2.58.0)
- **Build Tool**: Vite 7.1.7
- **Adapter**: @sveltejs/adapter-auto

## Key Features
- Server-side authentication handling via hooks
- Form-based actions for sign-in, sign-out, and profile updates
- Avatar upload with Supabase storage
- Type-safe page data and locals using SvelteKit conventions
