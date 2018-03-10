let todoID = 0;

export const ADD_TODO = (todoText) => {
  todoID++

  return {
    type: 'ADD_TODO',
    id: todoID,
    text: todoText,
    completed: false
  }
}

export const DELETE_TODO = (todoID) => {
  return {
    type: 'DELETE_TODO',
    id: todoID
  }
}
