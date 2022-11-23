const fs = require('fs');
//出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径，
// 解决此问题，需提供完整的文件存放路径
// fs.readFile('1.txt', 'utf-8', function (err, dataStr) {
// 	if (err) {
// 		return console.log('文件读取失败')
// 	}
// 	console.log('文件读取成功')
// })

//问题：移植性差，不利于维护
//复制路径时E:\project\node\1.txt ，需要将\转义
// fs.readFile('E:\\project\\node\\1.txt', 'utf-8', function (err, dataStr) {
// 	if (err) {
// 		return console.log('文件读取失败')
// 	}
// 	console.log('文件读取成功')
// })

//__dirname 表示当前文件所处的目录
// console.log(__dirname)
fs.readFile(__dirname + '/1.txt', 'utf-8', function (err, dataStr) {
	if (err) {
		return console.log('文件读取失败')
	}
	console.log('文件读取成功')
})