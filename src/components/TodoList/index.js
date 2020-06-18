import React, { useContext } from 'react'
import './style.scss';
import TodoItem from '../TodoItem';
import stateContext from '../../contexts/stateContext';

const TodoList = ({ handdleToggle, handleRemove }) => {
  const todos = useContext(stateContext)

  return (
    <div className="todo-list">
      {todos.map(todo => <TodoItem key={todo.id} handdleToggle={handdleToggle} handleRemove={handleRemove} {...todo} />)}
    </div>
  )
}
export default TodoList;