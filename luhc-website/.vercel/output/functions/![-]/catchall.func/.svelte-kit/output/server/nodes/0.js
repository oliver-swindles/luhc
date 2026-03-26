import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BkfDiegX.js","_app/immutable/chunks/DBavZ5B7.js","_app/immutable/chunks/DNSlcm0s.js","_app/immutable/chunks/NLYrliU6.js","_app/immutable/chunks/DuzNLqGH.js","_app/immutable/chunks/Bioj9h1j.js","_app/immutable/chunks/CXUWDbkB.js","_app/immutable/chunks/43R0gRaC.js","_app/immutable/chunks/D2AUiy-P.js","_app/immutable/chunks/Bb_FhQLd.js","_app/immutable/chunks/BeYShRCk.js","_app/immutable/chunks/ebf4o5hl.js","_app/immutable/chunks/BANvKaQ4.js","_app/immutable/chunks/CuukWuE9.js","_app/immutable/chunks/BHgn0UbP.js","_app/immutable/chunks/eSjrvcmC.js","_app/immutable/chunks/ByEMKBu4.js"];
export const stylesheets = ["_app/immutable/assets/0.6TbaLzK6.css"];
export const fonts = [];
