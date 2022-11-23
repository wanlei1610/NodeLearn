const fs = require('fs');

fs.writeFile('f:2.txt', 'abcd', function (err) {

	console.log(err)
})