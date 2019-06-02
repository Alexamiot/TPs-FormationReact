import React from 'react';
import '../RComponents/list.css';


export default class TodoItem extends React.Component{
    removeTodo(id){
        this.props.removeTodo(id);
    }
    render(){
        return(
            <div className="todoWrapper">
                <button className="removeTodo" onClick={()=>this.removeTodo(this.props.id)}> Supprimer </button>
                {this.props.todo.text}
            </div>
        )
    }
}