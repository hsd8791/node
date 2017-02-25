var vm=require('vm')

vm.runInThisContext('var obj={name:"hsd"}');
vm.runInThisContext('obj.fun=function(){console.log(this.name);}');

vm.runInThisContext('obj.fun()');
vm.runInThisContext('console.log(obj.name);');