export const ADD_TODO = 'ADD_TODO';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';


const todoReducer = (state, action) => {
	switch(action.type) {
		case ADD_TODO:
			return [
				...state, 
				{title: action.payload,
				id: Date.now(),
				completed: false}
			];
		case CLEAR_ITEMS:
			return state.filter((item => {
				return !item.completed;
			}));
		case TOGGLE_COMPLETED:
			const item_index = state.indexOf(action.payload)
			console.log(state.indexOf(action.payload))
			const newState = [...state]
			newState[item_index].completed = !action.payload.completed;
			return newState;
		default:
			return state;
	};
};

export default todoReducer;