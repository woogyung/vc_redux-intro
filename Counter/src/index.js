import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import { createStore } from 'redux'

const rootEl = document.getElementById('root')

function reducer (state = 0, action) {
  if (action.type === 'INCREMENT') {
    state++;
  } else if (action.type === 'DECREMENT') {
    state--;
  }

  return state;
}

let store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl
  )
}

render()

store.subscribe(render)

// 1. Redux concepts

// 2. Create store for counter app

// 3. Create reducer

// 4. Dispatch actions onIncrement & onDecrement

// 5. Store pub-sub
