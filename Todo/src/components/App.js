import React from 'react'
import TodoList from './TodoList'
import Todo from './Todo';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todoText: ''
    }
  }

  onTodoTextChange(ev) {
    this.setState({
      todoText: ev.target.value
    })
  }

  onTodoItemClick() {
    console.log('todo item click!')
  }

  onTodoAdd() {
    this.props.onTodoAdd(this.state.todoText)

    this.setState({
      todoText: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Vanilla Todo List</h1>
        <input onChange={this.onTodoTextChange.bind(this)} type="text" />
        <button onClick={this.onTodoAdd.bind(this)}>Add</button>
        {
          this.props.todos.length &&
          this.props.todos.map(todo => {
            return <Todo onDelete={this.props.onTodoDelete} key={todo.id} id={todo.id} completed={todo.completed} onClick={this.onTodoItemClick.bind(this)} text={todo.text} />
          })
        }
      </div>
    )
  }
}

export default App
