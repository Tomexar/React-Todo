import React from 'react';

const TodoForm = props =>{
    return(
        <form>
            <input 
                placeholder = "To Do"
                name = 'todo'/>
                <button>Add To Do</button>    
        </form>
    )
}

export default TodoForm;