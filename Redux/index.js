// redux의 전체적인 흐름
// redux의 핵심은 store다.
// 앱의 모든 정보가 store안에 저장되어있다.
// store 안에 state라는 실제 정보가 저장되어있다. 하지만 절대로 직접적으로 접근하는것이 불가능하다.

// reducer라는 함수를 만들어서 보급해줘야한다.
// render -> UI를 만들어줄 역할을 함 (redux와 상관없이) (직접적으로 짤 코드)

// store에 state에 직접 접속하는것이 불가능 하기 때문에
// dispatch() , subscribe() , getState()를 사용하여 state에 접속한다.
// 직접 state에 접속하지 않고 getState()를 이용하여 그 값을 가져와서 render()에서 원하는 코드(UI)를 만든다.

// subscribe() -> store의 state값이 바뀔때마다 render()을 호출 -> state값이 바뀔 때 마다 UI가 갱신된다.
// store.subscribe(render) -> state값이 바뀔때마다 render가 호출되면서 UI가 새롭게 갱신된다.

// dispatch(객체) -> dispatch 안의 객체를 action이라고 부른다.
// 1.reducer()를 호출하여 state의 값을 바꾼다.
// 2.그 작업이 끝난 후 subscribe()를 이용하여 render()를 호출한다. -> 화면의 갱신
// store.subscribe(render)

function reducer(oldStage, action) {
  // ....
}
let store = Redux.createStore(reducer);

function render() {
  let state = store.getState();
  // ....
  document.querySelector('#app').innerHTML = `
    <h1>WEB</h1>
    ...
    `;
}

function reducer(state, action) {
  // ....
  // dispatch()가 reducer를 호출할때 2개의 값을 전달한다.
  // dispatch()에 의해서 현재 state값과 action을 매개변수로 받는다.
  // if(action.type==='create'){
  //        ....
  //}
  // return state의 새로운 값
  // --------------------------------
  // 즉 reducer는 state를 입력값으로 받고 action을 참조해서
  // 새로운 state값을 만들어내서 return
  // state를 만들어내는 가공자
  // 이후에 subscribe()를 이용하여 다시 render()를 호출한다.
}

// 전송 버튼을 눌렀을때
// <form onsubmit="
//     //...
//     store.dispatch({type:'create',payload:{title:title,desc:desc}})
//     store.dispatch(action)
// ">
