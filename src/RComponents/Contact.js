import React, { Component } from 'react';
import '../App.css';
import Alex from '../Images/AlexPhoto.jpg';
import JB from '../Images/JBphoto.jpg'
class Contact extends Component {


    render() {
        return (
            <div className="page2 center" >

                <div>
                    <img src={Alex} alt="Alexandre" style={{width:450, height:300}} />
                    <h1>Alexandre Amiot</h1>
                    <h3>aamiot@juniorisep.fr</h3>
                 </div>


                <div>
                    <img src={JB} alt="JB" style={{width:450, height:300}}/>
                    <h1>Jean-Baptiste De Bellescize</h1>
                    <h3>jbdebellescize@juniorisep.fr</h3>

                </div>

            </div>
        );
    }
}

export default Contact;