// var foo=require('./foo.js')
var foo=require('foo')

var myFoo=new foo('Olmsted',25)

console.log('private var getting')
console.log(myFoo.getName())
console.log(myFoo.getAge())

console.log('test static')
foo.staticName='static name'
console.log(foo.id)
myFoo.staticName='wang'
foo.staticFun()