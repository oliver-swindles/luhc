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
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
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
			}
		],
		prerendered_routes: new Set(["/about","/about/meet-the-captains","/about/meet-the-exec","/contact-us","/links/dev","/links/mens","/live","/roses","/socials","/sponsors","/teams","/teams/development-squad","/teams/indoor-hockey","/teams/mens-club","/teams/womens-club"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
