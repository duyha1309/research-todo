import React, { useContext, useMemo } from 'react'
import './style.scss';
import TodoItem from '../TodoItem';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// import stateContext from '../../contexts/stateContext';
// import TodoItemContainer from '../../containers/TodoItemContainer';

const todosSelector = state => state.todos;
const filterSelector = state => state.filter;

const selectFilterTodos = createSelector(
  todosSelector,
  filterSelector,
  (todos, filter) => {
    switch (filter) {
      case "complete":
        return todos.filter(todo => todo.complete);
      case "uncomplete":
        return todos.filter(todo => !todo.complete);
      default:
        return todos;
    }
  }
);

const TodoList = () => {
  // const todos = useContext(stateContext)


  const todosFilter = useSelector(selectFilterTodos);
  console.log("data ", todosFilter);

  // const filter = useSelector(state => state.filter);
  // const todos = useSelector(state => state.todos);

  // const todosFilter = useMemo(() => {

  //   switch (filter) {
  //     case "complete":
  //       return todos.filter(todo => todo.complete);
  //     case "uncomplete":
  //       return todos.filter(todo => !todo.complete);
  //     default:
  //       return todos;
  //   }
  // }, [filter, todos]);
  return (
    <div className="todo-list">
      {todosFilter.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </div>
  )
}
export default TodoList;