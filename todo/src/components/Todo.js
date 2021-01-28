import React from 'react';
import { TOGGLE_COMPLETED } from '../reducers/todoReducer';
import './Todo.css';


const Todo = (props) => {
	const { item, dispatch } = props;

	const handleClick = () => {
		dispatch({type: TOGGLE_COMPLETED, payload: item})
	};

	return (
		<div className={`item${item.completed ? ' completed' : ''}`} onClick={handleClick}>
			<p>{item.title}</p>
		</div>
	);
};

export default Todo;