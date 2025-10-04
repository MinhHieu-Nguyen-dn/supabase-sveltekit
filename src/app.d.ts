import { SupabaseClient, Session } from '@supabse/supabase-js'
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient
			safeGetSession(): Promise<{ session: Session | null; user?: Session["user"] | null }>
		}
		interface PageData {
			session: Session | null
			user?: Session["user"] | null
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
