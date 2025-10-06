# Task Completion Checklist

When completing a coding task in this project, follow these steps:

## 1. Type Checking
```bash
npm run check
```
- Ensure no TypeScript errors
- Verify SvelteKit type generation is correct

## 2. Manual Testing
```bash
npm run dev
```
- Test the feature in the development server
- Check authentication flow if modified
- Verify forms and actions work correctly
- Test avatar upload if changed

## 3. Build Verification (Optional)
```bash
npm run build
```
- Verify production build succeeds without errors

## Notes
- **No linting tool**: This project does not have ESLint configured
- **No formatting tool**: This project does not have Prettier configured
- **No automated tests**: No test framework is configured (no Jest, Vitest, etc.)
- **Type checking is the primary validation**: The `npm run check` command is crucial

## Before Committing
- Ensure all TypeScript types are correct
- Follow the established code style (4-space indentation, single quotes)
- Use Svelte 5 runes correctly ($props, $state, $derived)
- Follow SvelteKit naming conventions for routes
- Test authentication flows if modified
