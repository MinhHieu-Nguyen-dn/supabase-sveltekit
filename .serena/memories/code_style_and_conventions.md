# Code Style and Conventions

## TypeScript Configuration
- **Strict mode enabled**: Full type safety required
- **allowJs/checkJs**: JavaScript files are checked
- **esModuleInterop**: true
- **forceConsistentCasingInFileNames**: true
- **moduleResolution**: bundler

## Naming Conventions
- **Files**: kebab-case for regular files, SvelteKit route conventions (+page.svelte, +layout.server.ts, etc.)
- **Variables**: camelCase (e.g., `fullName`, `avatarUrl`, `loading`)
- **Components**: PascalCase (e.g., `Avatar.svelte`)
- **Types/Interfaces**: PascalCase (e.g., `LayoutServerLoad`, `SubmitFunction`)

## Svelte 5 Runes Usage
The project uses **Svelte 5** with modern runes:
- **$props()**: For component props with type annotations
- **$state()**: For reactive state variables
- **$derived()**: For computed/derived values
- Example:
  ```typescript
  let { data, form } = $props()
  let loading = $state(false)
  let { session, user } = $derived(data)
  ```

## SvelteKit Conventions
- **Route files**: `+page.svelte`, `+page.server.ts`, `+layout.svelte`, `+layout.server.ts`, `+server.ts`
- **Server actions**: Export `actions` object with named functions in `+page.server.ts`
- **Load functions**: Export `load` function for server-side data loading
- **Type imports**: Use `./$types.js` for generated types (e.g., `ActionData`, `SubmitFunction`, `LayoutServerLoad`)

## Code Formatting
- **Indentation**: 4 spaces (visible in all TypeScript/Svelte files)
- **Quotes**: Single quotes for strings
- **Semicolons**: Not consistently used (some files have them, some don't)
- **Imports**: Organized with $env, $app, and external packages first

## Type Safety
- Explicit type annotations for props interfaces
- Use of TypeScript's `type` keyword for imports
- Type-safe form actions and load functions
- Proper typing of Supabase client and session objects

## Comments
- Minimal inline comments
- File path comments at top of some files (e.g., `// src/hooks.server.ts`)
