import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
       <h1>Todo App</h1>

      
       <ul>
         <li>Cook Breakfast</li>
         <li>Study all day</li>
         <li>Workout</li>
       </ul>

       <form>
         <input/>
         <button>Add</button>
       </form>

       <button>Clear</button>
      </div>
    );
  }
}
