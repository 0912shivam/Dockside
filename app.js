const http = require('node:http');

function createServer() {
	return http.createServer((req, res) => {
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
		res.end('Welcome to new world');
	});
}

if (require.main === module) {
	const port = process.env.PORT || 3000;
	createServer().listen(port, () => {
		console.log(`Server running at http://localhost:${port}`);
	});
}

module.exports = { createServer };
