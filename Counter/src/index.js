import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <Counter
    value={0}
    onIncrement={() => console.log('increment')}
    onDecrement={() => console.log('decrement')}
  />,
  rootEl
)

// 1. Redux concepts

// 2. Create store for counter app

// 3. Create reducer

// 4. Dispatch actions onIncrement & onDecrement

// 5. Store pub-sub
