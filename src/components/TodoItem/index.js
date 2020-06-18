import React from 'react'
import './style.scss';

const TodoItem = ({ handdleToggle, handleRemove, id, title, complete}) => {

	return (
		<div className="todo-item">
			<input className="toggle-icon" type="checkbox" checked={complete} onChange={() => handdleToggle(id)} />
			<p className="content">{title}</p>
			<span className="remove-icon" onClick={() => handleRemove(id)}>X</span>
		</div>
	)
}

export default React.memo(TodoItem);