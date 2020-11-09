import React from 'react';
export const GameContext = React.createContext();

export class GameContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            score: 0
        }

        this.changeQuestion = this.changeQuestion.bind();
    }

    changeQuestion(value) {
        this.setState({
            question: value
        });
    }

    render() {
        return (
            <GameContext.Provider value={{...this.state, changeQuestion: this.changeQuestion}}>
                {this.props.children}
            </GameContext.Provider>
        )
    }
}