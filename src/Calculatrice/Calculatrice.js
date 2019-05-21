import React, { Component } from 'react';
import './Calculatrice.css';

class Calculatrice extends Component {
    state={contenu:""};

    handleChange = event=> {
        this.setState({
            contenu: this.state.contenu + event.target.value
        })
    }
    answer = event=> {
        this.setState({
            contenu: eval(this.state.contenu)
        })
    }
    reboot = event=> {
        this.setState({
            contenu: ''
        })
    }
    delete = event=> {
        this.setState({
            contenu: this.state.contenu.substr(0,this.state.contenu.length-1)
        })
    }

    render(){
        return (
            <div className="App">

                <div class="calculatrice" >
                    <p class="answer">{this.state.contenu} </p>
                    <input class="text" type="text"
                           onChange={e => this.setState({contenu: e.target.value})} /> <br/>
                    <button value={1} class="boutton" onClick={this.handleChange}>1</button>
                    <button value={2} class="boutton" onClick={this.handleChange}>2</button>
                    <button value={3} class="boutton" onClick={this.handleChange}>3</button>
                    <button value={'%'} className="boutton boutton1" onClick={this.handleChange}>%</button><br/>
                    <button value={4} class="boutton" onClick={this.handleChange}>4</button>
                    <button value={5} class="boutton" onClick={this.handleChange}>5</button>
                    <button value={6} class="boutton" onClick={this.handleChange}>6</button>
                    <button value={'/'} className="boutton boutton1" onClick={this.handleChange}>/</button><br/>
                    <button value={7} class="boutton" onClick={this.handleChange}>7</button>
                    <button value={8} class="boutton" onClick={this.handleChange}>8</button>
                    <button value={9} class="boutton" onClick={this.handleChange}>9</button>
                    <button value={'+'} className="boutton boutton1" onClick={this.handleChange}>+</button><br/>
                    <button value={'-'} className="boutton boutton1" onClick={this.handleChange}>-</button>
                    <button value={0} className="boutton" onClick={this.handleChange}>0</button>
                    <button value={'*'} className="boutton boutton1" onClick={this.handleChange}>*</button>
                    <button value={'.'} className="boutton boutton1" onClick={this.handleChange}>,</button><br/>

                    <button className="boutton boutton3" onClick={this.delete}>SUPPR</button>
                    <button className="boutton boutton3" onClick={this.reboot}>RESET</button><br/>
                    <button className="boutton boutton2" onClick={this.answer}>=</button>
                </div>

            </div>
        );
    }
}

export default Calculatrice;