import React, { useEffect } from 'react';
import './style.scss';
// import AddTodoContainer from '../../containers/AddTodoContainer';

// import TodoListContainer from '../../containers/TodoListContainer';
// import FilterTodoContainer from '../../containers/FilterTodoContainer';
import Header from '../Header';
import AddTodo from '../AddTodo';
import TodoList from '../TodoList';
import FilterTodo from '../FilterTodo';
import { useDispatch } from 'react-redux';
import { fetchAPITodosAction } from '../../actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAPITodosAction());
  },[])
  
  return (
    <>
      <Header />
      <AddTodo />
      <TodoList />
      <FilterTodo />
    </>
  );
}

export default App;
