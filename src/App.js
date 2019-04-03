// eslint-disable-next-line
import React, { Component } from 'react';
import './App.css';
import './fallingtomatoes.mp4';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timerStarted: false,
			timerStopped: true,
			minutes: 25,
			seconds: 0
		};
	}
	handleReset() {
		this.setState({ timerStarted: false, timerStopped: true, seconds: 0, minutes: 25 });
		clearInterval(this.timer);
	}
	handleTimerStop() {
		this.setState({ timerStarted: false, timerStopped: true });
		clearInterval(this.timer);
	}
	handleTimerStart(e) {
		e.preventDefault();
		if (this.state.timerStopped) {
			//start button only works if not counting down
			this.timer = setInterval(() => {
				this.setState({ timerStarted: true, timerStopped: false });
				if (this.state.timerStarted) {
					//count down when press start button
					if (this.state.seconds === 0) {
						this.setState((prevState) => ({
							minutes: prevState.minutes - 1,
							seconds: 60
						}));
					}
					this.setState((prevState) => ({
						seconds: prevState.seconds - 1
					}));
					//alert if timer is done
					if (this.state.minutes === 0 && this.state.seconds === 0) {
						alert('take a break!');
						this.handleReset();
					}
				}
			}, 1000);
		}
	}

	handlePlusTime() {
		//add minutes to timer
		if (this.state.timerStopped) {
			this.setState({
				minutes: this.state.minutes + 1
			});
		}
	}
	handleMinTime() {
		//substract minutes from timer
		if (this.state.timerStopped) {
			this.setState({
				minutes: this.state.minutes - 1
			});
		}
	}

	render() {
		//render the clock + buttons
		let button;
		if (this.state.timerStopped) {
			//switch between start and reset button
			button = (
				<button className="btn btn-primary" onClick={this.handleTimerStart.bind(this)}>
					<i className="fas fa-play" />
				</button>
			);
		} else {
			button = (
				<button className="btn btn-primary" onClick={this.handleReset.bind(this)}>
					<i className="fas fa-undo-alt" />
				</button>
			);
		}
		return (
			<div className="container">
				<h2 className="text-center">Pomodoro Timer</h2>
				<div className="timer-container">
					<div className="timer-controls">
						<button className="btn btn-secondary" onClick={this.handlePlusTime.bind(this)}>
							<i className="fas fa-plus" />
						</button>
					</div>
					<div className="current-timer">{this.state.minutes + ':' + this.state.seconds}</div>

					<div className="timer-controls">
						<button className="btn btn-secondary" onClick={this.handleMinTime.bind(this)}>
							<i className="fas fa-minus" />
						</button>
					</div>
				</div>
				<div className="controls btn-group btn-group-toggle" data-toggle="buttons">
					{button}
					<button className="btn btn-primary" onClick={this.handleTimerStop.bind(this)}>
						<i className="fas fa-stop" />
					</button>
				</div>
			</div>
		);
	}
}
export default App;
