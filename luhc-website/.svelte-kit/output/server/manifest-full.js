export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","luhc-logo.png","LUHCClubConstitution.docx","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DnWt9cTN.js",app:"_app/immutable/entry/app.Evwacsxy.js",imports:["_app/immutable/entry/start.DnWt9cTN.js","_app/immutable/chunks/43R0gRaC.js","_app/immutable/chunks/DNSlcm0s.js","_app/immutable/chunks/NLYrliU6.js","_app/immutable/chunks/DuzNLqGH.js","_app/immutable/chunks/Bioj9h1j.js","_app/immutable/chunks/D2AUiy-P.js","_app/immutable/chunks/Bb_FhQLd.js","_app/immutable/entry/app.Evwacsxy.js","_app/immutable/chunks/DDazSb73.js","_app/immutable/chunks/NLYrliU6.js","_app/immutable/chunks/DuzNLqGH.js","_app/immutable/chunks/Bioj9h1j.js","_app/immutable/chunks/DBavZ5B7.js","_app/immutable/chunks/DNSlcm0s.js","_app/immutable/chunks/BANvKaQ4.js","_app/immutable/chunks/I0glxrJi.js","_app/immutable/chunks/eSjrvcmC.js","_app/immutable/chunks/Bb_FhQLd.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about/meet-the-captains",
				pattern: /^\/about\/meet-the-captains\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/about/meet-the-exec",
				pattern: /^\/about\/meet-the-exec\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contact-us",
				pattern: /^\/contact-us\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/links/dev",
				pattern: /^\/links\/dev\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/links/mens",
				pattern: /^\/links\/mens\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/live",
				pattern: /^\/live\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/roses",
				pattern: /^\/roses\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/socials",
				pattern: /^\/socials\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/sponsors",
				pattern: /^\/sponsors\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/teams",
				pattern: /^\/teams\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/teams/development-squad",
				pattern: /^\/teams\/development-squad\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/teams/indoor-hockey",
				pattern: /^\/teams\/indoor-hockey\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/teams/mens-club",
				pattern: /^\/teams\/mens-club\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/teams/womens-club",
				pattern: /^\/teams\/womens-club\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
