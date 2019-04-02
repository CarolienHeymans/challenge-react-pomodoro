// eslint-disable-next-line
import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerStarted: false,
            timerStopped: true,
            minutes: 25,
            seconds: 0,
            
        }}

    handleTimerStart(e) {
                 e.preventDefault();
            if(this.state.timerStopped) {
              this.timer = setInterval(() => {
                  this.setState({timerStarted: true, timerStopped: false});
                  if(this.state.timerStarted) {
                    if(this.state.seconds === 0) {
                      this.setState((prevState) => ({ minutes: prevState.minutes - 1, seconds: 60}));
                    }
                    this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
                  }
          
              }, 1000);
            }
      
          }
    handleTimerStop() {
            this.setState({timerStarted: false, timerStopped: true});
            clearInterval(this.timer);
          }

    handlePlusTime(){
      if(this.state.timerStopped) {
      this.setState({ minutes:this.state.minutes + 1});
          }
        }
    handleMinTime(){
      if(this.state.timerStopped) {
      this.setState({ minutes:this.state.minutes - 1});
            }
          }

        handleReset(){
          this.setState({
          timerStarted: false,
          timerStopped: true,
          seconds: 0,
          minutes: 25,
               });
        clearInterval(this.timer);
      }
    
    render() {
        return (
         <div className="container">
           <h2 className="text-center">Tomato Timer</h2>
           <div className="timer-container">
             <div className="current-timer">
                 <div id= "minutes"> {"Minutes: " + this.state.minutes}</div>

           <div id= "seconds"> {"Seconds: " + this.state.seconds}</div>
             </div>
             <div className="timer-controls">
               <button onClick={this.handleTimerStart.bind(this)} >Start 
                Timer</button>
               <button onClick={this.handleTimerStop.bind(this)}>Stop 
                Timer</button>
                <button onClick={this.handlePlusTime.bind(this)} >+</button>
                <button onClick={this.handleMinTime.bind(this)} >-</button>
                <button onClick={this.handleReset.bind(this)} >Reset</button>
             </div>
      
           </div>
         </div>
     );
     }
    }
export default App;