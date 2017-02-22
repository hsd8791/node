var util=require('util');

function testFunc(msg1,msg2) {
	return msg1+msg2
}

var parent=new Object()
parent.name='parent'
parent.func=testFunc
var child1 = new Object()
var child2 = new Object()
var child3 = new Object()
child1.name='child1'
child2.name='child2'
child3.name=3
parent.child=child1
child1.child=child2
child2.child=child3
util.inspect.styles.number='yellow'
// util.inspect.colors.number='bold'
console.log(util.inspect(parent,{depth:3,showHidden:true,colors:true}));