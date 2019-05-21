import React from 'react';
import '../list.css';


export default class TodoItem extends React.Component{
    constructor(props){
        super(props);
    }

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