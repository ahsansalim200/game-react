import React, { Component } from 'react';
import './css/master.css';
import TopNav from './components/topNav';
import TopSubNav from "./components/topSubNav";
import Main from "./components/main";

class App extends Component {
    constructor() {
        super();
    }
    state = {
        size: 3,
        highScore: isNaN(parseInt(localStorage.getItem('highScore'))) ? 0 : parseInt(localStorage.getItem('highScore')),
        currentScore: 0,
        randomId: '',
        buttonState: 'green',
        buttonText: 'Start',
        gameStatus: ''
    }

    handleSizeChange = (sizeInput) => {

        this.setState({
            size: sizeInput
        })
    }
    handleStartButton =() => {
        if(this.state.buttonState == 'green') {
            this.gameInterval = setInterval(() => {
                let rowNum = Math.floor(Math.random() * this.state.size);
                let columnNum = Math.floor(Math.random() * this.state.size);
                var randomId = rowNum + '-' + columnNum;
                this.setState({
                    randomId: randomId
                })
            }, 1000)
            this.gameTimeout = setTimeout(() => {
                clearInterval(this.gameInterval);
                this.setState({
                    buttonState: 'green',
                    buttonText: 'Start',
                    randomId: '',
                    gameStatus: 'Game Over'
                })
            }, 20000)
            this.setState({
                buttonState: 'red',
                buttonText: 'Stop',
                gameStatus: 'Game In Progress'
            })
        } else {
            clearInterval(this.gameInterval);
            clearTimeout(this.gameTimeout);
            this.setState({
                buttonState: 'green',
                buttonText: 'Start',
                randomId: '',
                gameStatus: 'Game Over'
            })
        }

    }
    handleScoreUpdate = (key) => {
        if(this.state.randomId == key) {
            this.state.currentScore ++;
            if(this.state.highScore <= this.state.currentScore) {
                this.state.highScore = this.state.currentScore;
                localStorage.setItem('highScore', this.state.currentScore);
            }
        } else {
            this.state.currentScore --;
            if(this.state.currentScore < 0) {
                this.state.currentScore = 0;
            }
        }
        this.setState({
            currentScore: this.state.currentScore,
            highScore: this.state.highScore
        })
    }
    render() {
        return (
            <React.Fragment>
                <TopNav></TopNav>
                <TopSubNav size={this.state.size}
                           handleSizeChange={this.handleSizeChange}
                           handleStartButton={this.handleStartButton}
                           buttonState={this.state.buttonState}
                           buttonText={this.state.buttonText}/>
                <Main size={this.state.size}
                      highScore={this.state.highScore}
                      currentScore={this.state.currentScore}
                      handleScoreUpdate={this.handleScoreUpdate}
                      randomId={this.state.randomId}
                      gameStatus={this.state.gameStatus}/>
            </React.Fragment>

        );
    }
}

export default App;
