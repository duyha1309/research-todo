import React, { useReducer, useMemo, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import StateContext from './contexts/stateContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterTodo from './components/FilterTodo';
import appReducer from './reducer';
import { FETCH_TODO, ADD_TODO, TOGGLE_TODO, REMOVE_TODO, FILTER_TODO } from './constants/actionType';
import fetchApi from './api';

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    todos: [],
    filter: 'all'
  })
  const addTodo = title => {
    dispatch({
      type: ADD_TODO,
      payload: title
    });
  };

  const toggleTodo = id => {
    dispatch({
      type: TOGGLE_TODO,
      payload: id
    });
  };

  const removeTodo = id => {
    dispatch({
      type: REMOVE_TODO,
      payload: id
    });
  };
  const filterTodo = filter => {
    dispatch({
      type: FILTER_TODO,
      payload: filter
    });
  }

  const todosFilter = useMemo(() => {
    const {todos, filter} = state;
    
    switch(filter) {
      case "complete":
        return todos.filter(todo => todo.complete);
      case "uncomplete":
        return todos.filter(todo => !todo.complete);
      default:
        return todos;
    }
  }, [state])

  const fetchTodo = () => {
    fetchApi().then(todos => {
      dispatch({
        type: FETCH_TODO,
        payload: todos
      })
    })
  }

  useEffect(() => {
    fetchTodo();
  }, [])
  
  return (
    <StateContext.Provider value={todosFilter}>
      <Header />
      <AddTodo handleAdd={addTodo} />
      <TodoList  handdleToggle={toggleTodo} handleRemove={removeTodo} />
      <FilterTodo filter={state.filter} handleFilter={filterTodo} />
    </StateContext.Provider>

  );
}

export default App;
