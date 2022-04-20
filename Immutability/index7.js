// 객체를 변경하지 못하도록 하는 방법인 Object.freeze

var o1 = { name: 'kim', score: [1, 2] };
Object.freeze(o1); // 객체의 프로퍼티에 대해서만 freeze 한다.
Object.freeze(o1.score); // 객체에 대한 참조값만 가짐으로 o1.score이라는 score의 저장소에 접근해서 freeze 해줘야 한다.
o1.name = 'lee';
o1.city = 'seoul';
// o1.score.push(3); // TypeError: Cannot add property 2, object is not extensible
console.log(o1);

// const와 Object.freeze()의 차이
// freeze()는 값 자체를 바꾸지 못하게 하는것이고
// const는 가리키는 값을 다른것으로 못바꾸게 하는 것
// const와 freeze()를 같이 사용함으로써 강력한 Immutable한 데이터를 만들 수 있다.

const a = { name: 'kim' };
Object.freeze(a);
const b = { name: 'lee' };
// o1 = o2;
a.name = 'park';
console.log(a); // { name: 'kim' }
