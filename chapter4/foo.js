var _name,_age;
var name='',age=0;

var foo=function(name,age){
	_name=name
	_age=age
}

foo.prototype.getName=function(){
	return _name
}

foo.prototype.getAge=function(){
	return _age
}

foo.prototype.setName = function(name) {
	_name=name
};
foo.prototype.setAge = function(age) {
	_age=age
};

foo.staticName=''
foo.staticFun=function(){
	console.log(this.staticName)
}
foo.prototype.name=name
foo.prototype.age=age
module.exports=foo;