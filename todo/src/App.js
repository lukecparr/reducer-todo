import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import todoReducer from './reducers/todoReducer';
import './App.css';


const initialState = [
    {
      title: 'Put components in place',
      id: 6842135498,
      completed: true
    },
    {
      title: 'Render elements on screen',
      id: 1598746513,
      completed: false
    },
    {
      title: 'Get reducer working',
      id: 8165412695,
      completed: false
    }
  ];

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <div className="App">
      <h2>Welcome to my Todo App!</h2>
        <TodoList todos={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
