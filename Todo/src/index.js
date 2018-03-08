import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// 1. create store for Todo app

// 2. Usage of react-redux

// 3. Provider

// 4. Container component vs Presentational component

// 5. mapStateToProps

// 6. mapDispatchToProps
