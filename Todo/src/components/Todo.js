import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, onDelete, id }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <div onClick={() => {
      onDelete(id)
    }}>X</div>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
