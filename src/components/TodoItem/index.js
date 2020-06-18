import React from 'react'
import './style.scss';
import { toggleTodoAction, removeTodoAction } from '../../actions';
import { useDispatch } from 'react-redux';


const TodoItem = ({ id, title, complete }) => {
	const dispatch = useDispatch();
	const handleToggle = () => {
		dispatch(toggleTodoAction(id));
	}
	const handleRemove = () => {
		dispatch(removeTodoAction(id));
	}
	return (
		<div className="todo-item">
			<input className="toggle-icon" type="checkbox" checked={complete} onChange={handleToggle} />
			<p className="content">{title}</p>
			<span className="remove-icon" onClick={handleRemove}>X</span>
		</div>
	)
}

export default React.memo(TodoItem);