import React from 'react';
import Todo from './Todo';
import NewTodoInput from './NewTodoInput';
import './TodoList.css';

const TodoList = (props) => {
const { todos, dispatch } = props;

	return(
		<div className='todoContainer'>
			{todos.map((item) => <Todo item={item} />)}
			<NewTodoInput dispatch={dispatch}/>
		</div>
	)
};

export default TodoList;