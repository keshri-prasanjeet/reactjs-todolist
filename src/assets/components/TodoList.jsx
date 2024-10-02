import React from 'react';
import TodoCard from "./TodoCard.jsx";

const TodoList = (props) => {
    // eslint-disable-next-line react/prop-types
    const {todoArray} = props
    return (
        <ul className={"main"}>
            {todoArray.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    );
};

export default TodoList;