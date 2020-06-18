import React, { useState } from 'react'
import './style.scss';
import { addTodoAction } from '../../actions';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const [txt, setTxt] = useState('');
  const dispatch = useDispatch();
  
  const handleInsertTodo = () => {
    dispatch(addTodoAction(txt));
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