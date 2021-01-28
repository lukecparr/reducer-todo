import React, { useState } from 'react';
import { ADD_TODO } from '../reducers/todoReducer';
import './NewTodoInput.css'

const NewTodoInput = (props) => {
	const { dispatch } = props;
	const [newTodo, setNewTodo] = useState('')

	const handleChanges = (e) => {
		setNewTodo(e.target.value)
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({type: ADD_TODO, payload: newTodo});
		setNewTodo('')
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="title"
					placeholder="Type to add a todo"
					onChange={handleChanges}
					value={newTodo}
				/>
				<button type="submit">Add Todo</button>
			</form>
		</>
	)
}

export default NewTodoInput;