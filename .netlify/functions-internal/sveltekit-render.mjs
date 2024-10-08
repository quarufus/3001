import { init } from '../serverless.js';

export const handler = init((() => {
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
		client: {"start":"_app/immutable/entry/start.CeT_nCCn.js","app":"_app/immutable/entry/app.BsEdhGBa.js","imports":["_app/immutable/entry/start.CeT_nCCn.js","_app/immutable/chunks/entry.Cgx2aeMg.js","_app/immutable/chunks/runtime.CTgw1619.js","_app/immutable/chunks/environment.CZLhA_4V.js","_app/immutable/entry/app.BsEdhGBa.js","_app/immutable/chunks/runtime.CTgw1619.js","_app/immutable/chunks/render.eg8K0OGZ.js","_app/immutable/chunks/disclose-version.BKAQXv4t.js","_app/immutable/chunks/index-client.CxHoJbcT.js","_app/immutable/chunks/environment.CZLhA_4V.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
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
				endpoint: __memo(() => import('../server/entries/endpoints/api/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
