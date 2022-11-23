const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
	const { url, method } = req;

	const str = ` Your request url is ${url} , and request method is ${method}`
	console.log(str)

	res.end(str)

});

server.listen('8080', () => {
	console.log('server running att http://127.0.0.1')
})