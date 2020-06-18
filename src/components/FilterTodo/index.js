import React from 'react'
import './style.scss';

const FilterTodo = ({filter, filterTodoAction}) => {
  return (
    <div className="filter-todo">
      <button className={`btn ${filter === 'all' ? 'active' : ''}`} onClick={() => filterTodoAction('all')}>All</button>
      <button className={`btn ${filter === 'complete' ? 'active' : ''}`} onClick={() => filterTodoAction('complete')}>Complete</button>
      <button className={`btn ${filter === 'uncomplete' ? 'active' : ''}`} onClick={() => filterTodoAction('uncomplete')}>Uncomplete</button>
    </div>
  )
};

export default FilterTodo;