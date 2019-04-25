// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'


const TodoList = props => {
    return (
        <div>
            <h3>To Do's</h3>
            <div className = 'todoList'>
                {props.todos.map(todo =>(
                    <Todo todo = {todo} key = {todo.id} toggleComplete ={props.toggleComplete}/>
                ))}
            
            </div>
        </div>

    )

}
export default TodoList;