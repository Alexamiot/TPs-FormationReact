import React, { Component } from 'react';
import './Clock.css'
import Clock from './clock';

export class Compteur extends Component {
    constructor(props){
        super(props);
        this.state={
            deadline: '2019-12-31 23:59:59 '
        }
        this.changeDeadline=this.changeDeadline.bind(this)
    }

    changeDeadline(e){
        this.setState({deadline: e.target.value});
    }
    render(){
        return (

            <div>
                <h3>Compte à rebours jusqu'au {this.state.deadline} (YYYY/MM/DD)</h3>
                <Clock
                    deadline={this.state.deadline}
                /><br/>

                <input
                    type="date"
                    onChange={this.changeDeadline}
                />

            </div>
        )

    }
}

