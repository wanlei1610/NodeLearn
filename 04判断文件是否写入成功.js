const fs = require('fs');

fs.writeFile('f:/3.txt', 'abcdddd', function (err) {
	if (err) {
		return console.log('文件写入失败' + err.message)
	}
	console.log('文件写入成功')
})