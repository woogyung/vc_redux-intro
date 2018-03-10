const initialState = {
  todos: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      state.todos.push(action)
      return state
    case 'DELETE_TODO':
      const todos = state.todos.slice()
      const newTodos = []

      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id !== action.id) {
          newTodos.push(todos[i])
        }
      }

      return {
        todos: newTodos
      }
    default:
      return state
  }
}
