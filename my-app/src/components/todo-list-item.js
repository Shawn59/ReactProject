import React from 'react';

const ToDoListItem = (props) => {
    const style = {
        color: props.important ? 'red' : 'blue'
    };

    return (
        <li key={props.id} style={style}>{props.label}</li>
    );
};

export default ToDoListItem;