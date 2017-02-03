var foo=require('./foo.js')

var myFoo=new foo('Olmsted',25)

console.log('private var getting')
console.log(myFoo.getName())
console.log(myFoo.getAge())

console.log('test static')
foo.staticName='static name'
myFoo.staticName='wang'
foo.staticFun()