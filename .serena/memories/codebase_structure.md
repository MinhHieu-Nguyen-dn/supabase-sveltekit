# Codebase Structure

## Directory Layout
```
src/
├── hooks.server.ts          # Server hooks for Supabase client initialization
├── app.d.ts                 # TypeScript app declarations (Locals, PageData)
├── app.html                 # HTML template
├── +layout.server.ts        # Root layout server load function
├── +layouts.ts              # Root layout
├── style.css                # Global styles
├── lib/
│   ├── index.ts            # Library exports
│   └── assets/
│       └── favicon.svg
└── routes/
    ├── +layout.svelte      # Root layout component
    ├── +page.server.ts     # Home page server actions/load
    ├── +page.svelte        # Home page (sign-in form)
    ├── account/
    │   ├── +page.server.ts # Account page server actions/load
    │   ├── +page.svelte    # Account profile page
    │   └── Avatar.svelte   # Avatar upload component
    └── auth/
        ├── confirm/
        │   └── +server.ts  # Email confirmation endpoint
        └── error/
            └── +page.svelte # Auth error page
```

## Key Files
- **hooks.server.ts**: Creates Supabase server client and provides `safeGetSession()` helper
- **app.d.ts**: Defines type-safe Locals (supabase, safeGetSession) and PageData (session, user)
- **+layout.server.ts**: Root layout loads session/user data for all pages
- **+page.server.ts** (routes): Contains form actions and load functions following SvelteKit conventions
- **+page.svelte**: Svelte components with TypeScript and Svelte 5 runes ($props, $state, $derived)
