import React, { useContext, useMemo } from 'react'
import './style.scss';
import TodoItem from '../TodoItem';
import { useSelector } from 'react-redux';

// import stateContext from '../../contexts/stateContext';
// import TodoItemContainer from '../../containers/TodoItemContainer';

const TodoList = () => {
  // const todos = useContext(stateContext)
  const filter = useSelector(state => state.filter);
  const todos = useSelector(state => state.todos);

  const todosFilter = useMemo(() => {
    
    switch(filter) {
      case "complete":
        return todos.filter(todo => todo.complete);
      case "uncomplete":
        return todos.filter(todo => !todo.complete);
      default:
        return todos;
    }
  }, [filter, todos]);
  return (
    <div className="todo-list">
      {todosFilter.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </div>
  )
}
export default TodoList;