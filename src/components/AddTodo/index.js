import React, { useState } from 'react'
import './style.scss';

const AddTodo = ({addTodoAction}) => {
  const [txt, setTxt] = useState('');

  const handleInsertTodo = () => {
    addTodoAction(txt);
    setTxt('');
  }

  return (<div className="add-todo">
    <div className="form-group">
      <label className="form-label">Task name</label>
      <input className="form-control" value={txt} onChange={e => setTxt(e.target.value)} />
    </div>
    <button className="btn btn-add" disabled={!txt} onClick={handleInsertTodo} >Add</button>
  </div>)
}

export default AddTodo;