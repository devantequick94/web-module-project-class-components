import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: true
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        }
      ]
    }
  }

handleClear = () => {

this.setState({
  ...this.state,
  todos: this.state.todos.filter(todo => {
      return (todo.completed === false);
    })
  });

}

  render() {
    const { todos } = this.state;
    console.log(todos);

    return(
      <div>
        <h1>Todos</h1>
        
        <TodoList todos={todos}/>
        <Form />
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}

export default App;


