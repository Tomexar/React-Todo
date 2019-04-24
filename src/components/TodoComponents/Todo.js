import React from 'react'

const Todo = props =>{
    return (
        <div>
            <div className = 'todo-info'>
                {props.todo.task}
            </div>
        </div>

    )

}
export default Todo;