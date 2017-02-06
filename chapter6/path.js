var path=require('path')

var p=path.normalize('../chapter6/\/.././de.txt');
console.log(p);

var p1=path.resolve('a');
console.log(p1);

var p2=path.resolve('../a');
console.log(p2);

var p3=path.resolve('/a');
console.log(p3);

var p4=path.resolve('/a','b');
console.log(p4);

var p5=path.resolve('/a','b','c:/d');
console.log(p5);
console.log('---------------');

var r1=path.relative('./123/a','../b');
console.log(r1);
console.log('---------------');

var n1=path.dirname('./123');
console.log(n1);

var n2=path.dirname('./123/test.txt');
console.log(n2);
console.log('---------------');

console.log(path.parse(n2));
console.log(path.parse(p5));