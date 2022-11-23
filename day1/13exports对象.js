console.log(exports)
console.log(module.exports)
console.log(exports === module.exports)

const username = 'zai';

exports.username=username;
exports.age = 20;
exports.sayHi = function(){
	console.log('大家好')
}