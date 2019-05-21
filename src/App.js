import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Accueil from './Accueil.js';
import ToDoList from "./TodoComponents/ToDoList";
import Calculatrice from "./Calculatrice/Calculatrice.js";
import {Compteur} from "./Compteur/compteur";
import './App.css';
import Contact from "./Contact";

class App extends Component {
  constructor(props){
    super();
  this.state={PageAct:1};
  }
  changePage(newPage){
    this.setState({PageAct:newPage});
  }
  /*
  changePage2(){
    if(this.state.PageAct<7){
      this.setState({PageAct:this.state.PageAct+1});
      if(this.state.PageAct==7){this.setState({PageAct:1})}
    }
  }

  componentDidMount(){
    setInterval(()=> this.changePage2()
        , 2000);
  }
  */


  render() {
    return (
        <div>
      <Header changePage={this.changePage.bind(this)} Page={this.state.PageAct}/>
      {(this.state.PageAct===1)&& <div><Accueil/></div>}
      {(this.state.PageAct===2)&& <div className="center"><h2>Avec 69,192 Alexandre Amiot est pour le moment le grand champion</h2>
                                            <a target="_blank" href="https://www.freetetris.org/game.php">Pour battre le record</a> </div>}
      {(this.state.PageAct===3)&& <div className="center"> <Compteur/> </div>}
      {(this.state.PageAct===4)&& <div> <Calculatrice/> </div>}
      {(this.state.PageAct===5)&& <div> <ToDoList/> </div>}
      {(this.state.PageAct===6)&& <div> <Contact/> </div>}

        </div>

    );
  }
}

export default App;
