//문자열 등 유사 배열(Array-like) 객체나 이터러블한 객체를 배열로 만들어주는 메서드입니다.
//(※ 유사 배열 객체란, 키가 인덱스 값으로 되어있고 길이를 나타내는 length 속성을 갖는 객체를 의미합니다.)
const arr = new Array(5).fill(1);
console.log(arr);

const arr2 = Array.from({ length: 5 }, (v, i) => 1);
console.log(arr2);

const arr3 = Array.from({ length: 5 });
console.log(arr3);

const arr4 = Array.from({ length: 5 }, (v, i) => i);
console.log(arr4);

const arr5 = Array.from('foo');
console.log(arr5);

const arr6 = 'foo'.split('');
console.log(arr6);

const arr7 = Array.from({ 0: 1, 1: 2, 2: 3, length: 3 });
console.log(arr7);
