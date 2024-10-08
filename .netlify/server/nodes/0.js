

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BcNXbhqi.js","_app/immutable/chunks/disclose-version.BKAQXv4t.js","_app/immutable/chunks/runtime.CTgw1619.js"];
export const stylesheets = [];
export const fonts = [];
