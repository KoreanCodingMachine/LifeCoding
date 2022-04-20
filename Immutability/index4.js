//Nested object -> 중첩된 객체
//배열의 경우 원본을 회손하지 않는 함수 ->slice() , concat() , arrayFrom()

var o1 = { name: 'kim', score: [1, 2] };
var o2 = Object.assign({}, o1);
o2.score = o2.score.concat();
o2.score.push(3);
console.log(o1, o2, o1 === o2, o1.score === o2.score);
// { name: 'kim', score: [ 1, 2 ] } { name: 'kim', score: [ 1, 2, 3 ] } false false

let a = 'hi';
let b = 'jh';
let c = a.concat(b); // hijh
console.log(c);

let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let newArr = arr1.concat(arr2);
console.log(newArr); // [ 1, 2, 3, 4, 5 ]
