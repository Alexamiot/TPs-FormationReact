import React, { Component } from 'react';
import '../RComponents/list.css';
import TodoInput from "./TodoInput.js";
import TodoItem from "./TodoItem.js";

class ToDoList extends Component {

    constructor(props){
        super(props);

        this.state={
            todos: [
                {id:0,text:"Watch Aquaman"},
                {id:1, text: "Learn more React"}
            ],
            nextId:2
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(todoText){
            let todos = this.state.todos;
            todos.push({id:this.state.nextId, text: todoText});
            this.setState({
                todos: todos,
                nextId:++this.state.nextId
            })
    }
    removeTodo(id){
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !==id)
        });
    }

    render() {
        return (
            <div className="list">
                <h1>Ma Liste de choses à faire</h1>
                <TodoInput todoText="" addTodo={this.addTodo}/>
                <ul>
                    {
                        this.state.todos.map((todo) => {
                            return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ToDoList;