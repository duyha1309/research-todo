import React from 'react'
import './style.scss';

const FilterTodo = ({filter, handleFilter}) => {
  return (
    <div className="filter-todo">
      <button className={`btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>All</button>
      <button className={`btn ${filter === 'complete' ? 'active' : ''}`} onClick={() => handleFilter('complete')}>Complete</button>
      <button className={`btn ${filter === 'uncomplete' ? 'active' : ''}`} onClick={() => handleFilter('uncomplete')}>Uncomplete</button>
    </div>
  )
};

export default FilterTodo;