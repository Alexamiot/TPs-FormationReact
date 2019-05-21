import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }

    }
    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount(){
        setInterval(()=>this.getTimeUntil(this.props.deadline),1000);
}
    componentWillUnmount(){
        clearInterval(this.time);
    }
    leading0(num){
        if(num>-1)
            return num <10  ? '0'+num : num;
        return num;
    }
    getTimeUntil(deadline){
        const time = Date.parse(deadline)- Date.parse(new Date());

        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/(1000*60*60))%24);
        const days = Math.floor((time/(1000*60*60*24)));
        this.setState({days,hours,minutes,seconds});
    }

    render(){

        return(
            <div>

                <div className="clock">{this.leading0(this.state.days)} jours</div>
                <div className="clock">{this.leading0(this.state.hours)} heures</div>
                <div className="clock">{this.leading0(this.state.minutes)} minutes</div>
                <div className="clock">{this.leading0(this.state.seconds)} secondes</div>
            </div>
        )
    }

}

export default Clock;
