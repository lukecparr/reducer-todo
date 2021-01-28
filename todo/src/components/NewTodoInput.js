import React, { useState } from 'react';
import { ADD_TODO, CLEAR_ITEMS } from '../reducers/todoReducer';
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
				<div>
					<button type="submit">Add Todo</button>
					<button type="button" onClick={() => {dispatch({type: CLEAR_ITEMS})}}>Clear</button>
				</div>
			</form>
		</>
	)
}

export default NewTodoInput;