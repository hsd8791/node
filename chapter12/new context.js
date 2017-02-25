var vm=require('vm')

var obj = {name:'',agend:'male'}
vm.runInNewContext('name="hsd"', obj);
vm.runInNewContext('age=40', obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.agend);