import React from 'react'
import './style.scss';

const TodoItem = ({ toggleTodoAction, removeTodoAction , id, title, complete }) => {

	return (
		<div className="todo-item">
			<input className="toggle-icon" type="checkbox" checked={complete} onChange={() => toggleTodoAction(id)} />
			<p className="content">{title}</p>
			<span className="remove-icon" onClick={() => removeTodoAction(id)}>X</span>
		</div>
	)
}

export default React.memo(TodoItem);