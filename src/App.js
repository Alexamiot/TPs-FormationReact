import React, { Component } from 'react';
import './App.css';
import Header from './RComponents/header.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Accueil from './RComponents/Accueil.js';
import ToDoList from "./TodoComponents/ToDoList";
import Calculatrice from "./Calculatrice/Calculatrice.js";
import {Compteur} from "./Compteur/compteur";
import Contact from "./RComponents/Contact";
import Tetris from "./RComponents/Tetris";
import FlickR from "./RComponents/Flickr";


class App extends Component {

  render() {
    return (
        <Router>
          <div>
            <Header />

            <Route exact path="/" component={Accueil} />
            <Route path="/Todo" component={ToDoList} />
            <Route path="/Calculatrice" component={Calculatrice} />
            <Route path="/Compteur" component={Compteur} />
            <Route path="/Tetris" component={Tetris} />
            <Route path="/Flickr" component={FlickR} />
            <Route path="/Contact" component={Contact} />
          </div>
        </Router>



    );
  }
}

export default App;

/*
  changePage(newPage){
    this.setState({PageAct:newPage});
  }
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

          <div>
      <Header changePage={this.changePage.bind(this)} Page={this.state.PageAct}/>
      {(this.state.PageAct===1)&& <div ><Accueil/></div>}
      {(this.state.PageAct===2)&& <TTetris/>}
      {(this.state.PageAct===3)&& <div className="center"> <Compteur/> </div>}
      {(this.state.PageAct===4)&& <div> <Calculatrice/> </div>}
      {(this.state.PageAct===5)&& <div> <ToDoList/> </div>}
      {(this.state.PageAct===6)&& <div> <Contact/> </div>}
      {(this.state.PageAct===7)&& <div> <FlickR/> </div>}

        </div>
 */

