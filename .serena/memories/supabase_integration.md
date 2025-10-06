# Supabase Integration Details

## Authentication Flow
The project uses Supabase for authentication with SSR support.

## Server-Side Setup (hooks.server.ts)
- **Supabase Client**: Created in `handle` hook using `createServerClient` from `@supabase/ssr`
- **Environment Variables**: 
  - `PUBLIC_SUPABASE_URL`
  - `PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- **Cookie Management**: Automatic cookie handling for auth state
- **safeGetSession()**: Helper function in `event.locals` to safely retrieve user and session

## Type Definitions (app.d.ts)
```typescript
App.Locals {
    supabase: SupabaseClient
    safeGetSession(): Promise<{ session: Session | null; user?: Session["user"] | null }>
}
App.PageData {
    session: Session | null
    user?: Session["user"] | null
}
```

## Usage Patterns
1. **Server load functions**: Use `locals.safeGetSession()` to get user/session
2. **Client components**: Access `data.supabase` for client-side Supabase operations
3. **Form actions**: Use Supabase client from `locals.supabase` for auth operations
4. **Avatar uploads**: Use Supabase storage buckets via client

## Authentication Features
- Magic link email sign-in
- Sign-out functionality
- Profile management (full_name, username, website)
- Avatar upload to Supabase storage
