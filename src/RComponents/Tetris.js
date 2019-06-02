import React from 'react';
import './tetrisStyle.css';


/*
const Tetris = require('react-tetris');
<iframe allow="fullscreen" accessKey={true} style={{width:'100%', height:600}} src="https://avin.github.io/react-game-tetris/"> </iframe>


 */

class Tetris extends React.Component {

    render() {
        return (
            <div>
                <embed style={{width:'100%', height:600}} src="https://avin.github.io/react-game-tetris/"></embed>
            </div>
        );
    }
}

export default Tetris;