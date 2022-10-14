const fs = require('fs');

fs.readFile('成绩.txt', 'utf-8', function (err, dataStr) {
	if (!err) {

		let reportList = dataStr.split(' ');

		let newList = reportList.map((item, index) => {
			return item.replace('=', ':')
		})

		console.log(newList, '44')

		fs.writeFile('成绩-ok.txt', newList.join('\r\n'), function (err) {
			if (err) {
				console.log('成绩写入失败')
			}
			console.log('成绩写入成功')
		})
	}
})