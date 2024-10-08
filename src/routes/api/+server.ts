import dotenv from "dotenv";
dotenv.config();

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET(request) {
	const data = request.body;

	return {
		body: {
			message: "Hello World!",
		},
	};
}
