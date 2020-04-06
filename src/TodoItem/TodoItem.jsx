import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
    const {todo} = props;
    return (
        <li><strong>{todo.id}</strong> {todo.title} </li>
    );
};

TodoItem.prototype = {
    todo: PropTypes.object
};
export default TodoItem;