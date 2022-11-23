const p = Promise.resolve().then(function () {
	console.log('promise1')
});
console.log(p)

// .then(function () {
// 	console.log('promise2')
// }).finally(function (a) {
// 	console.log(a, 'ok')
// }).catch(function (err) {
// 	console.log(err, 'err')
// })