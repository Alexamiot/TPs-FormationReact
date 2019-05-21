import React, { Component } from 'react';
import './App.css';

class Accueil extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="page1 center">
                <h1>Ce petit support va regrouper tous les TP de la formation</h1>
                <h2>N'est-ce pas génial ?</h2>
                <h3>Ah oui oui oui, c'est vraiment un truc de ouf !!</h3>
                <h4>Ouai je sais, merci</h4>
                <h5>Tu pense qu'on pourrais aussi avoir des petits liens utiles pour progresser ?</h5>
                <h6>Merci de cette bonne idée, voici quelques liens :</h6>
                <a href="https://reactjs.org/docs/hello-world.html" target="_blank"> Doc de React </a><br/>
                <a href="https://facebook.github.io/react-native/docs/getting-started" target="_blank"> Doc de React Native </a><br/>
                <a href="https://reactnavigation.org/docs/en/getting-started.html" target="_blank"> Doc de React Navigation </a><br/>
                <a href="" target="_blank"> Doc de React </a><br/>

            </div>
        );
    }
}

export default Accueil;