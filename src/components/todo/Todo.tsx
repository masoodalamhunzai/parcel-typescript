import * as React from "react";
import { TodoItems } from "./TodoItems";
// import {EmptySpace}  from './Emptyspace';

class Todos extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        text: "Go to Gym",
        done: true
      }
    ]
  };

  CreateTodo = () => {
    const input = document.querySelector("#text");
    const value = input.value;
    if (value != "") {
      const obj = {
        id: this.state.todos.length + 1,
        text: value,
        done: false
      };
      this.setState({
        todos: [...this.state.todos, obj]
      });
      input.value = "";
    } else {
      input.style.borderColor = "red";
      input.setAttribute("placeHolder", "Please enter some value");
      input.className = "error";
      input.onfocus = () => {
        input.style.borderColor = "blue";
        input.setAttribute("placeHolder", "");
        input.className = "success";
      };
    }
  };

  deleteTodo = id => {
    const todos = [...this.state.todos];
    const newTodos = todos.filter(item => item.id !== id);

    this.setState({
      todos: newTodos
    });
  };

//   onDone = (done) => {
//     //   const done = true;
    
//     const status =[...this.state.todos];
//     const  doneValue = status.map(item =>{
            
//     })
//     console.log(this.state.todos);
//     // this.setState({
//     //     doneValue:done
//     // })

//   }
  printItems() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Items</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        {this.state.todos.map(item => {
          return (
            <TodoItems
              text={item.text}
              done={item.done}
              id={item.id}
              onDelete={this.deleteTodo}
            //   onDone={this.onDone}
            />
          );
        })}
      </table>
    );
  }
  render() {
    return (
      <div>
        <h2>To Do App</h2>
        <input type="text" id="text" />
        <button className="add-items" onClick={this.CreateTodo}>
          Add New Todo
        </button>
        {this.printItems()}
      </div>
    );
  }
}
export { Todos };
