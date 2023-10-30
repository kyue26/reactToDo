import React, { useState } from "react";
import {v4 as uuid} from "uuid";

function TodoForm({ addTodo }) {
    const[todo, setTodo] = useState({
        id: "",
        task: "",
        complete: false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task:e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() });
            setTodo({ ...todo, task: "" })
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ justifyContent: "flex-start" }}>
            <input 
                name = "task"
                type = "text"
                value = {todo.task}
                onChange = {handleTaskInputChange}
            />
            <button type="submit">submit!</button>
        </form>
    );
}

export default TodoForm;