import React, { Component } from 'react';
import {Link } from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="header">
                        <Link to="/">Accueil</Link>
                        <Link to="/Tetris">Tetris</Link>
                        <Link to="/Compteur">Compte à rebours</Link>
                        <Link to="/Calculatrice">Calculatrice</Link>
                        <Link to="/Todo">Todolist</Link>
                        <Link to="/Flickr">FlickR (API)</Link>
                        <Link to="/Contact">Nous contacter</Link>

                    </div>
                </header>
            </div>
        );
    }
}


export default Header;
/*

    changeActivePage (newPage){
        this.props.changePage(newPage);
    }

            <div className="App">
                <header className="App-header">
                    <div className="header">
                        <a onClick={()=>this.props.changePage(1)} >Accueil</a>
                        <a onClick={()=>this.changeActivePage(2)}>Tetris</a>
                        <a onClick={()=>this.changeActivePage(3)}>Compte à rebours</a>
                        <a onClick={()=>this.changeActivePage(4)}>Calculatrice</a>
                        <a onClick={()=>this.changeActivePage(5)}>ToDoList</a>
                        <a onClick={()=>this.changeActivePage(6)}>Nous contacter</a>
                        <a onClick={()=>this.changeActivePage(7)}>API Flickr</a>
                    </div>

                </header>
            </div>
            Header.defaultProps={Page:1};
 */