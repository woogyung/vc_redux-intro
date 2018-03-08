import React from 'react'
import TodoList from './TodoList'
import Todo from './Todo';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }
  }

  onTodoListClick() {
    console.log('todo list click!')
  }

  onTodoItemClick() {
    console.log('todo item click!')
  }

  render() {
    return (
      <div>
        <h1>Vanilla Todo List</h1>
        <TodoList todos={this.state.todos} onTodoClick={this.onTodoListClick.bind(this)} />
        {
          this.state.todos.length &&
          this.state.todos.map(todo => {
            return <Todo completed={todo.completed} onClick={this.onTodoItemClick.bind(this)} text={todo.text} />
          })
        }
      </div>
    )
  }
}

export default App
