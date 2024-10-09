export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bvevg4N7.js","app":"_app/immutable/entry/app.DUD1zj6V.js","imports":["_app/immutable/entry/start.Bvevg4N7.js","_app/immutable/chunks/entry.cR-qRVCd.js","_app/immutable/chunks/runtime.v5OgUrs7.js","_app/immutable/chunks/environment.CZLhA_4V.js","_app/immutable/entry/app.DUD1zj6V.js","_app/immutable/chunks/runtime.v5OgUrs7.js","_app/immutable/chunks/render.d_ZckKwN.js","_app/immutable/chunks/disclose-version.CHU7zomo.js","_app/immutable/chunks/index-client.BG7rV0wK.js","_app/immutable/chunks/environment.CZLhA_4V.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
