const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request', (req, res) => {
	const { url } = req;

	// const Fpath = path.join(__dirname, url);

	let Fpath = '';

	if (url === '/') {
		Fpath = path.join(__dirname, './clock/index.html');
	} else {

		Fpath = path.join(__dirname, 'clock', url)
	}

	fs.readFile(Fpath, (err, dataStr) => {

		if (err) return res.end('404 Not found')

		res.end(dataStr);
	})


});

server.listen(80, () => {
	console.log('启动服务器')
})