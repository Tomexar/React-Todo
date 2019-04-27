import React from 'react'

export default function Todo(props){

    let classNames = 'todo';
    if (props.todo.completed){
        classNames = 'completed'; //for whatever reason todo.completed doesnt work
    }

    function updateCompleted(){

        props.toggleComplete(props.todo.id);
    }

    return (
        <div className = {classNames} onClick = {updateCompleted}>
            <p>{props.todo.task}</p>
        </div>
    );

}

// const Todo = props =>{
//     return (
//         <div>
//             <div className = 'todo-info'>
//                 {props.todo.task}
//             </div>
//         </div>

//     )

// }
// export default Todo;