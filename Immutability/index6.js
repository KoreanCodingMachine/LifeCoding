// function fn(person) {
//   person = Object.assign({}, person);
//   person.name = 'lee';
//   return person;
// }

// var o1 = { name: 'kim' };
// var o2 = fn(o1);
// console.log(o1, o2); // { name: 'kim' } { name: 'lee' }

function fn(person) {
  person.name = 'lee';
}
var o1 = { name: 'kim' };
var o2 = Object.assign({}, o1);
fn(o2);
console.log(o1, o2); // { name: 'kim' } { name: 'lee' }

var score = [1, 2, 3];
var a = score;
var b = score;
// score.push(4);
var score2 = score.concat(4);
console.log(score, score2, a, b); // [ 1, 2, 3 ] [ 1, 2, 3, 4 ] [ 1, 2, 3 ] [ 1, 2, 3 ]
// 원본의 배열을 수정하지 않는 방법
