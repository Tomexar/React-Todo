import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
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


  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <TodoList todos = {this.state.todos} />
        <TodoForm 
          value={this.state.todo}
          handleAddTodo={this.addtoDo}
          handleChanges = {this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
