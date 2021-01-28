export const ADD_TODO = 'ADD_TODO';


const todoReducer = (state, action) => {
	switch(action.type) {
		case "ADD_TODO":
			return [
				...state, 
				{title: action.payload,
				id: Date.now(),
				completed: false}
			];
		default:
			return state;
	};
};

export default todoReducer;