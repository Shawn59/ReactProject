import React from 'react';
import ToDoListItem from './todo-list-item';

const ToDoList = (props) => {
    const elemList = props.listDate.map((item) => {
        return <ToDoListItem key={item.id} label={item.label} important={item.important}/>;
    });
    return (
        <ul>
            {elemList}
        </ul>
    );
};

export default ToDoList;