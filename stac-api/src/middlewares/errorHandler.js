export default function errorHandler(err, req, res, next) {
	// Simple error handler that returns JSON
	// In production you might want to hide stack traces
	const status = err && err.status ? err.status : 500;
	const response = {
		code: status,
		description: err && err.message ? err.message : "Internal Server Error"
	};
	if (process.env.NODE_ENV !== "production" && err && err.stack) {
		response.stack = err.stack.split("\n").slice(0, 5).join("\n");
	}
	res.status(status).json(response);
}
