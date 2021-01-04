import React from 'react';
import TodoContext from '../contexts/TodoContext';
import NavBar from './NavBar';
import TodoList from './TodoList';

const App = () => {
    return (
        <TodoContext>
            <div className="uk-container">
                <NavBar></NavBar>
                <TodoList></TodoList>
            </div>
        </TodoContext>
    );
}


export default App;