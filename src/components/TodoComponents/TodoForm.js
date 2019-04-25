import React from 'react';

const TodoForm = props =>{
    return(
        <form onSubmit = {props.handleAddTodo}> 
            <input
                onChange = {props.handleChanges}
                type = "text"
                value = {props.value}
                placeholder = "To Do"
                name = 'todo'/>
                <button>Add To Do</button>  
                <button>Clear Selected</button>  
        </form>
    )
}

export default TodoForm;