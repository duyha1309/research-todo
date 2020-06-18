import React from 'react'
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodoAction } from '../../actions';


const FilterTodo = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <div className="filter-todo">
      <button className={`btn ${filter === 'all' ? 'active' : ''}`} onClick={() => dispatch(filterTodoAction('all'))}>All</button>
      <button className={`btn ${filter === 'complete' ? 'active' : ''}`} onClick={() => dispatch(filterTodoAction('complete'))}>Complete</button>
      <button className={`btn ${filter === 'uncomplete' ? 'active' : ''}`} onClick={() => dispatch(filterTodoAction('uncomplete'))}>Uncomplete</button>
    </div>
  )
};

export default FilterTodo;