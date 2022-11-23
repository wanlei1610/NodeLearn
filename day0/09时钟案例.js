const fs = require('fs');
const path = require('path');

// 其中 \s 表示空白字符  \S 标识非空白字符   *表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/;

const regScript = /<script>[\s\S]*<\/script>/;


function resolveCSS(htmlStr) {
	const r1 = regStyle.exec(htmlStr);

	const newCSS = r1[0].replace('<style>', '').replace('</style>', '')

	fs.writeFile(path.join(__dirname, '/clock/index.css'), newCSS, function (err) {
		if (err) {
			return console.log('css文件写入失败' + err.message)
		}
		console.log('css文件写入成功')
	})

}

function resolveJS(htmlStr) {
	const r1 = regScript.exec(htmlStr);

	const newJs = r1[0].replace('<script>', '').replace('</script>', '')

	fs.writeFile(path.join(__dirname, '/clock/index.js'), newJs, function (err) {
		if (err) {
			return console.log('js文件写入失败' + err.message)
		}
		console.log('js文件写入成功')
	})

}

function resolveHtml(htmlStr) {
	const cssStr = `<link rel='stylesheet' href='./index.css'/>`;
	const jsStr = `<script src='./index.js'></script>`

	const newHtml = htmlStr.replace(regStyle, cssStr).replace(regScript, jsStr);

	fs.writeFile(path.join(__dirname, '/clock/index.html'), newHtml, function (err) {
		if (err) {
			return console.log('html写入成功' + err.message)
		}
		console.log('html写入成功')
	})
}


fs.readFile(path.join(__dirname, '时钟.html'), 'utf-8', function (err, dataStr) {
	if (err) {
		return console.log('读取html文件失败' + err.message)
	}

	resolveCSS(dataStr)
	resolveJS(dataStr)
	resolveHtml(dataStr)
})