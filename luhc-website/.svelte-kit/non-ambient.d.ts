
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/about/meet-the-captains" | "/about/meet-the-exec" | "/contact-us" | "/links" | "/links/dev" | "/links/mens" | "/roses" | "/socials" | "/sponsors" | "/teams" | "/teams/development-squad" | "/teams/indoor-hockey" | "/teams/mens-club" | "/teams/womens-club";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/about/meet-the-captains": Record<string, never>;
			"/about/meet-the-exec": Record<string, never>;
			"/contact-us": Record<string, never>;
			"/links": Record<string, never>;
			"/links/dev": Record<string, never>;
			"/links/mens": Record<string, never>;
			"/roses": Record<string, never>;
			"/socials": Record<string, never>;
			"/sponsors": Record<string, never>;
			"/teams": Record<string, never>;
			"/teams/development-squad": Record<string, never>;
			"/teams/indoor-hockey": Record<string, never>;
			"/teams/mens-club": Record<string, never>;
			"/teams/womens-club": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/about/meet-the-captains" | "/about/meet-the-captains/" | "/about/meet-the-exec" | "/about/meet-the-exec/" | "/contact-us" | "/contact-us/" | "/links" | "/links/" | "/links/dev" | "/links/dev/" | "/links/mens" | "/links/mens/" | "/roses" | "/roses/" | "/socials" | "/socials/" | "/sponsors" | "/sponsors/" | "/teams" | "/teams/" | "/teams/development-squad" | "/teams/development-squad/" | "/teams/indoor-hockey" | "/teams/indoor-hockey/" | "/teams/mens-club" | "/teams/mens-club/" | "/teams/womens-club" | "/teams/womens-club/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.ico" | "/favicon.png" | "/luhc-logo.png" | "/robots.txt" | "/sitemap.xml" | string & {};
	}
}