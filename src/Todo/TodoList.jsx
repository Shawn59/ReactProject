import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import PropTypes from 'prop-types';

const TodoList = (props) => {
    const {todos = []} = props;
    return(
        <ul>
            {todos.map(item =>
                <TodoItem todo={item} key={item.id}/>
            )}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object)
};
export default TodoList;