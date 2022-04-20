//name , value

// name (이름에 대한 불변함)

var v = 1;
// 1~
v = 2;

console.log(v); // 2

const c = 1;
// 1~
c = 2; // TypeError: Assignment to constant variable.

// 정리
// 변수의 이름에 대한 불변성을 갖기 위해서는 const라는 변수를 선언함
