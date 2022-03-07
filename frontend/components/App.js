import React from 'react'
import TodoList from './TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  render() {
    const { todos } = this.state;
    
    return (
      <div>
       <h1>Todo App</h1>

       <TodoList todos={todos}/>

       <form>
         <input/>
         <button>Add</button>
       </form>

       <button>Clear</button>
      </div>
    );
  }
}

export default App;


