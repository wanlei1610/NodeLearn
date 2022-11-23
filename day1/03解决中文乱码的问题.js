const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
	const { url, method } = req;

	const str = `您请求的 URL 地址是 ${url}, 请求的method 类型为 ${method}`;

	//使用 res.setHeader()方法，设置 Content-type 响应头，解决中文乱码的问题
	res.setHeader('Content-Type', 'text/html;charset=utf-8');

	res.end(str);

});

server.listen(80, () => {
	console.log('server running ar http://127.0.0.1')
})