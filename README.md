# Redux

## 리덕스의 동기

자바스크립트 SPA가 점점 복잡해짐에 따라, 우리의 코드는 이전보다 훨씬 많은 양의 state를 관리하게 되었습니다. state라 하면, 서버에서 받은 정보일수도 있고, 캐쉬된 데이터일수도 있고, 혹은 아직 서버쪽에 전송되지 않은 데이터일수도 있습니다. 이런 어플리케이션의 state에 따라 프론트엔드에서 보여주고 관리해야하는 UI state 또한 매우 복잡해졌습니다.

연속적으로 끊임없이 변하는 state를 관리하는 것은 굉장히 어려운 일입니다. 만약 어떤 모델이 다른 모델을 업데이트시키고, 또 다른 뷰가 또 다른 모델을 업데이트시키고, 그리고 또 다시 다른 뷰가 업데이트되어야하고.. 이런 일련의 과정속에서 작업을 하다보면 우리는 도대체 어플리케이션의 state가 언제 어디서 어떻게 발생했는지에 대한 디버깅 과정에 대한 큰 혼란이 올수 있습니다.

리덕스라는 패턴은 이런 일련의 혼란스러운 과정속에 묻혀있는 어플리케이션의 state 관리를 조금 더 심플하고 쉽게 다루기 위해서 시작된 것입니다.

## 중요 개념들

### Action

### Reducers

### Store

### Data Flow

### With React