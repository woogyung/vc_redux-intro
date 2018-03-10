import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import AppContainer from './containers/AppContainer'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)

// store.subscribe(render)

// % Key Concepts %

// 1. create store for Todo app
// 2. Usage of react-redux https://redux.js.org/basics/usage-with-react
// 3. Provider
// 4. Container component vs Presentational component
// 5. mapStateToProps
// 6. mapDispatchToProps
// 7. combineReducers

// % Demo

// 1. Add Todo
// 2. Show Todo List
// 3. Filter Todo Item State (completed vs active)
