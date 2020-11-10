import React from 'react';
export const GameContext = React.createContext();

export class GameContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            score: 0,
            isGameOver: false
        }

        this.changeQuestion = this.changeQuestion.bind(this);
        this.updateScore = this.updateScore.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }

    changeQuestion() {
        this.setState({
            question: this.props.possibleQuestions[
                Math.floor(
                    Math.random() * 64
                )
            ]
        });
    }

    gameOver() {
        this.setState({
            isGameOver: !this.state.isGameOver
        });
    }

    updateScore() {
        this.setState({
            score: this.state.score + 1
        });
    }

    render() {
        return (
            <GameContext.Provider 
                value={
                    {
                        ...this.state, 
                        changeQuestion: this.changeQuestion, 
                        updateScore: this.updateScore,
                        gameOver: this.gameOver
                    }
                }
            >
                {this.props.children}
            </GameContext.Provider>
        )
    }
}