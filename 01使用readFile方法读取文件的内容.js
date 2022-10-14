// import { readFile } from 'node:fs';

const fs = require('fs');


fs.readFile('./11.txt', 'utf8', (err, data) => {

	//如果读取成功 err 则为 null;
	//如果读取失败 err 值为错误对象，data 为undefined
	console.log(err)
	console.log('----------')
	console.log(data)
})