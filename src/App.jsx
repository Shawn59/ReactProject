import React from "react";
import ToDoList from "./Todo/TodoList";

const App = () => {
    let todos = [
        {
            id: 1,
            completed: false,
            title: 'AAAA'
        },
        {
            id: 2,
            completed: false,
            title: 'BBB'
        }
    ];
    return (
        <React.Fragment>
            <span>Hello</span>
            <ToDoList todos={todos}/>
        </React.Fragment>
    )
};

export default App;