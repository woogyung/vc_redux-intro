import { connect } from 'react-redux'
import App from '../components/App'
import { ADD_TODO, DELETE_TODO } from '../actions'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoAdd: (todoText) => {
      dispatch(ADD_TODO(todoText))
    },
    onTodoDelete: (todoID) => {
      dispatch(DELETE_TODO(todoID))
    }
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
