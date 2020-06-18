import React, { useEffect } from 'react';
import './style.scss';
import AddTodoContainer from '../../containers/AddTodoContainer';

import TodoListContainer from '../../containers/TodoListContainer';
import FilterTodoContainer from '../../containers/FilterTodoContainer';
import Header from '../Header';



function App({fetchAPITodosAction}) {

  useEffect(() => {
    fetchAPITodosAction();
  },[])
  
  return (
    <>
      <Header />
      <AddTodoContainer />
      <TodoListContainer />
      <FilterTodoContainer />
    </>
  );
}

export default App;
