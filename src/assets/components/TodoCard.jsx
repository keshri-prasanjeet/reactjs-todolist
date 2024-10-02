// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

const TodoCard = (props) => {
    // eslint-disable-next-line react/prop-types
    const {children, handleDeleteTodos, handleEditTodos, index} = props
    return (
        <li className={"todoItem"}>
            {children}
            <div className={"actionsContainer"}>
                <button onClick={() => {
                        handleEditTodos(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() =>{
                    handleDeleteTodos(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    );
};

export default TodoCard;