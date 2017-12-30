# Redux

## 리덕스의 동기

자바스크립트 SPA가 점점 복잡해짐에 따라, 우리의 코드는 이전보다 훨씬 많은 양의 state를 관리하게 되었습니다. state라 하면, 서버에서 받은 정보일수도 있고, 캐쉬된 데이터일수도 있고, 혹은 아직 서버쪽에 전송되지 않은 데이터일수도 있습니다. 이런 어플리케이션의 state에 따라 프론트엔드에서 보여주고 관리해야하는 UI state 또한 매우 복잡해졌습니다.

연속적으로 끊임없이 변하는 state를 관리하는 것은 굉장히 어려운 일입니다. 만약 어떤 모델이 다른 모델을 업데이트시키고, 또 다른 뷰가 또 다른 모델을 업데이트시키고, 그리고 또 다시 다른 뷰가 업데이트되어야하고.. 이런 일련의 과정속에서 작업을 하다보면 우리는 도대체 어플리케이션의 state가 언제 어디서 어떻게 발생했는지에 대한 디버깅 과정에 대한 큰 혼란이 올수 있습니다.

리덕스라는 패턴은 이런 일련의 혼란스러운 과정속에 묻혀있는 어플리케이션의 state 관리를 조금 더 심플하고 쉽게 다루기 위해서 시작된 것입니다.

## 중요 개념들

### Action

Action이란, 우리 어플리케이션에서 발생한 일을 의미합니다. 여기서 중요한건 어플리케이션이라는 단어입니다. 어플리케이션 단위에서 일어난 중요한 일들을 표현하는 것이 Action입니다.

Redux에서 Action이란 아래와 같이 단순 Javascript Object로 표현합니다.
```javascript
{
  "delta": 1000,
  "payload": {
    "type": "message",
    "user": {
      "id": 1,
      "user_name": "허근행",
      "display_name": "돈까스"
    },
    "message": {
      "id": 1,
      "text": "야호!"
    }
  }
}
```

어플리케이션에서 일어나는 모든 일들을 Action으로 표현하는 것은, 우리 어플리케이션에서 어떤 일들이 일어나고 어떻게 진행되는지를 이해하는데에 굉장한 도움을 주게 됩니다.

### Reducers

Reducer라는 개념을 설명하기 전에 우선적으로 `Array.prototype.reduce`에 대해 기억해보세요. 잘 기억이 안나신다면, 문서를 보시고 다시 한번 이해해보세요.

Redux에서의 Reducer는 `Array.prototype.reduce`에서의 콜백 함수(`=== reducer`)와 거의 똑같습니다. 단순 함수입니다. Redux에서 가장 중요한 역할인 Reducer가 존재함이 곧 Redux에 함수형 컨셉이 녹아들어있기도 한 가장 큰 이유입니다.
```javascript
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}
```

Reducer는 이전 어플리케이션의 State을 인자로 받고, 우리는 기존 State과 새로운 Action에 대한 정보를 통합하여 새로운 State를 반환해야합니다. 그렇게되면 Redux가 어플리케이션의 State를 업데이트하게 되고, 연결된 컴포넌트들은 새로운 props를 받아 업데이트 됩니다.

### Store

Store라는 것은 우리 어플리케이션의 State를 보관하는 딱 하나의 보관함입니다. 모든 State는 하나의 Store에서 관리되고 수정됩니다.
```javascript
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

### Data Flow

1. 새로운 Action 발생
2. Reducer 실행
3. Store 업데이트
4. Component 업데이트

### 그림으로 설명하는 Redux 흐름

- UI 컴포넌트에서 Action을 발생시킵니다. (예, 사용자가 로그인 버튼 클릭)
- 로그인 관련 액션을 만들어 리덕스 세상에 알립니다.
- Reducer에 정의해놓은 로그인 액션 관련 Reducer가 호출되고 로그인 관련 State가 새로 생성됩니다.
- Redux 시스템이 해당 State를 Store에 업데이트 시키고 Store는 change 이벤트를 발생시킵니다.
- 관련 컴포넌트는 이미 초기 구동시에 리덕스가 해당 change 이벤트에 구독시켜 놓았기 때문에 자동으로 업데이트 됩니다.
- 상위 컴포넌트가 업데이트되면 하위 컴포넌트들도 자동으로 다시 업데이트 됩니다.

![Basic Redux Flow 1](https://raw.githubusercontent.com/vanilla-coding/redux-intro/master/diagrams/redux-1.png?token=ADIDL8K1b5oilVSlf_EeNnTMjVkqgn69ks5aUL-jwA%3D%3D)

![Basic Redux Flow 2](https://raw.githubusercontent.com/vanilla-coding/redux-intro/master/diagrams/redux-2.png?token=ADIDL75W7UNM-FCln0wfxARbnAp-zFADks5aUMAawA%3D%3D)

![Basic Redux Flow 3](https://raw.githubusercontent.com/vanilla-coding/redux-intro/master/diagrams/redux-3.png?token=ADIDL2bYsHtvthW54Mf_XN1MV88pDQ--ks5aUMAswA%3D%3D)
