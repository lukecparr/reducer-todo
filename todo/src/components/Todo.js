import React from 'react';
import './Todo.css';


const Todo = (props) => {
	const { item } = props;

	return (
		<div className={`item${item.completed ? ' completed' : ''}`}>
			<p>{item.title}</p>
		</div>
	);
};

export default Todo;