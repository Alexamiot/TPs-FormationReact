import React, { Component } from 'react';


class Accueil extends Component {

    render() {
        return (
            <div className="page1 center">
                <h1>Ce petit support va regrouper tous les TP de la formation</h1>
                <h2>N'est-ce pas génial ?</h2>
                <h3>Ah oui oui oui, c'est vraiment un truc de ouf !!</h3>
                <h4>Ouai je sais, merci</h4>
                <h5>Tu pense qu'on pourrais aussi avoir des petits liens utiles pour progresser ?</h5>
                <h6>Merci de cette bonne idée, voici quelques liens :</h6>
                <a href="https://wiki.juniorisep.com/consultants/start" target="_blank" rel="noopener noreferrer"> Le Wiki de la JE</a><br/>
                <a href="https://reactjs.org/docs/hello-world.html" target="_blank"  rel="noopener noreferrer"> Doc de React </a><br/>
                <a href="https://facebook.github.io/react-native/docs/getting-started" target="_blank"  rel="noopener noreferrer"> Doc de React Native </a><br/>
                <a href="https://reactnavigation.org/docs/en/getting-started.html" target="_blank"  rel="noopener noreferrer"> Doc de React Navigation </a><br/>
                <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank"  rel="noopener noreferrer"> Faire un router </a><br/>
                <a href="https://snack.expo.io/@alexamiot/tp3-nav2019" target="_blank" rel="noopener noreferrer"> Le Snack de l'application mobile</a><br/>
            </div>
        );
    }
}

export default Accueil;