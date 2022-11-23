//在一个自定义模块中，默认情况下，module.export={}

module.exports.username = 'zs';

module.exports.sayHello = function () {
	console.log('Hello!')
}

const age = 10;

module.exports.age = age;


module.exports={
	nickName:'xiaohei',
	say:function(){
		console.log(this.nickName)
	}
}
