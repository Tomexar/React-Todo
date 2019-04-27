import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './App.css'


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: [
      ],
      todo: ''
    }
  }
  // handleChanges = event =>{
  //   console.log(event.target);
  //   this.setState({
  //     todo: {
  //       ...this.state.todo,
  //       [event.target.todo]: event.target.value
  //     }
  //   })


  // }
  handleChanges = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]:
      event.target.value
    });
  };


  addtoDo = event =>{
    event.preventDefault();
    const newTodo = { task:this.state.todo, completed:false, id: Date.now()};
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo:''
    });

  };

  toggleComplete = id =>{

    this.setState({
      todos: this.state.todos.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task
      )
    })
  }

  removeCompleted = () =>{

    this.setState({
      todos: this.state.todos.filter(task=> !task.completed)
    });
  };


  render() {
    return (
      <div>
        <header>
          <h1>To Do List</h1>
          <TodoForm 
            value={this.state.todo}
            handleAddTodo={this.addtoDo}
            handleChanges = {this.handleChanges}
          />
        </header>  
          
        <TodoList 
          todos = {this.state.todos} 
          toggleComplete = {this.toggleComplete}
        />
      
        <button className = 'clear'onClick = {this.removeCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
