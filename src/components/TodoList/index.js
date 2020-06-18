import React, { useContext, useMemo } from 'react'
import './style.scss';

// import stateContext from '../../contexts/stateContext';
import TodoItemContainer from '../../containers/TodoItemContainer';

const TodoList = ({filter, todos}) => {
  // const todos = useContext(stateContext)

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
      {todosFilter.map(todo => <TodoItemContainer key={todo.id} {...todo} />)}
    </div>
  )
}
export default TodoList;