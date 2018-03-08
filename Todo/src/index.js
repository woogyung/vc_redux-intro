import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

render(
  <App />,
  document.getElementById('root')
)

// % Key Concepts %

// 1. create store for Todo app
// 2. Usage of react-redux
// 3. Provider
// 4. Container component vs Presentational component
// 5. mapStateToProps
// 6. mapDispatchToProps
// 7. combineReducers

// % Demo

// 1. Add Todo
// 2. Show Todo List
// 3. Filter Todo Item State (completed vs active)
