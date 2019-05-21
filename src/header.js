import React, { Component } from 'react';

class Header extends Component {

    constructor(props){
        super(props);
    }
    changeActivePage (newPage){
        this.props.changePage(newPage);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="header">
                        <a onClick={()=>this.props.changePage(1)}>Accueil</a>
                        <a onClick={()=>this.changeActivePage(2)}>Leaderboard</a>
                        <a onClick={()=>this.changeActivePage(3)}>Compte à rebours</a>
                        <a onClick={()=>this.changeActivePage(4)}>Calculatrice</a>
                        <a onClick={()=>this.changeActivePage(5)}>ToDoList</a>
                        <a onClick={()=>this.changeActivePage(6)}>Nous contacter</a>
                    </div>

                </header>
            </div>
        );
    }
}
Header.defaultProps={Page:1};

export default Header;