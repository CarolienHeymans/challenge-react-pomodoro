// eslint-disable-next-line
import React, {Component} from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerStarted: false,
            timerStopped: true,
            minutes: 25,
            seconds: 0
        }
    }
    handleReset() {
        this.setState({timerStarted: false, timerStopped: true, seconds: 0, minutes: 25});
        clearInterval(this.timer);
    }
    handleTimerStop() {
        this.setState({timerStarted: false, timerStopped: true});
        clearInterval(this.timer);
    }
    handleTimerStart(e) {
        e.preventDefault();
        if (this.state.timerStopped) {
            this.timer = setInterval(() => {
                this.setState({timerStarted: true, timerStopped: false});
                if (this.state.timerStarted) {
                    if (this.state.seconds === 0) {
                        this.setState((prevState) => ({
                            minutes: prevState.minutes - 1,
                            seconds: 60
                        }));
                    }
                    this.setState((prevState) => ({
                        seconds: prevState.seconds - 1
                    }));
                    if (this.state.minutes === 0 && this.state.seconds === 0) {
                      alert("take a break!");
                      this.handleReset();
                  }
                }

            }, 1000);
        }

    }

    handlePlusTime() {
        if (this.state.timerStopped) {
            this.setState({
                minutes: this.state.minutes + 1
            });
        }
    }
    handleMinTime() {
        if (this.state.timerStopped) {
            this.setState({
                minutes: this.state.minutes - 1
            });
        }
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Tomato Timer</h2>
                <div className="timer-container">
                    <div className="current-timer">
                        <div id="minutes">
                            {"Minutes: " + this.state.minutes}</div>

                        <div id="seconds">
                            {"Seconds: " + this.state.seconds}</div>
                    </div>
                    <div className="timer-controls">
                        <button
                            onClick={this
                            .handleTimerStart
                            .bind(this)}>Start Timer</button>
                        <button
                            onClick={this
                            .handleTimerStop
                            .bind(this)}>Stop Timer</button>
                        <button
                            onClick={this
                            .handlePlusTime
                            .bind(this)}>+</button>
                        <button
                            onClick={this
                            .handleMinTime
                            .bind(this)}>-</button>
                        <button
                            onClick={this
                            .handleReset
                            .bind(this)}>Reset</button>
                    </div>

                </div>
            </div>
        );
    }
}
export default App;
