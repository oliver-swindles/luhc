import * as universal from '../entries/pages/_page.ts.js';
import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.AXTaZ-V4.js","_app/immutable/chunks/DBavZ5B7.js","_app/immutable/chunks/NLYrliU6.js","_app/immutable/chunks/Bioj9h1j.js","_app/immutable/chunks/ebf4o5hl.js","_app/immutable/chunks/BANvKaQ4.js","_app/immutable/chunks/CuukWuE9.js","_app/immutable/chunks/BHgn0UbP.js","_app/immutable/chunks/ByEMKBu4.js","_app/immutable/chunks/DuzNLqGH.js","_app/immutable/chunks/I0glxrJi.js","_app/immutable/chunks/eSjrvcmC.js","_app/immutable/chunks/Bb_FhQLd.js","_app/immutable/chunks/BHueSgA-.js","_app/immutable/chunks/CvF1Vx4r.js","_app/immutable/chunks/DNSlcm0s.js"];
export const stylesheets = ["_app/immutable/assets/2.C0vQB8OW.css"];
export const fonts = [];
