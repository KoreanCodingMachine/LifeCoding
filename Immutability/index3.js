var v1 = { name: 'kim' };
var v2 = Object.assign({}, v1);
v2.name = 'lee';
console.log(v1, v2, v1 === v2);

var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy);

var obj1 = { a: 1 };
var obj2 = { b: 2 };
var obj3 = { c: 3 };
var newObj = Object.assign({}, obj1, obj2, obj3);

console.log(newObj); // { a: 1, b: 2, c: 3 }
