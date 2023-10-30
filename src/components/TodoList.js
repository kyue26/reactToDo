import React, {useState} from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleComplete }) {
    return(
        <ul style={{ listStyle: 'none', justifyContent: 'flex-start'}}>
            {todos.map(todo => (
                <Todo 
                    todo={todo} 
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}/>
            ))}
        </ul>
    );
}
export default TodoList;