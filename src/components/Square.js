import React from 'react';
import './Square.scss';
import { GameContext } from '../contexts/GameContext';

class Square extends React.Component {
    static contextType = GameContext;
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if((!this.context.isGameOver)  && (this.context.question === this.props.name)){
            this.context.updateScore();
            this.context.changeQuestion();
        }
    }

    render(){
        let img;
        let [file, rank] = this.props.name.split('');

        if(rank == 7){
            img = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
        } else if(rank == 2){
            img = "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
        } else if(rank == 1){
            if(file == 'a' || file == 'h'){
                img = "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg";
            } else if(file == 'b' || file == 'g'){
                img = "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg";
            } else if(file == 'c' || file == 'f'){
                img = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg";
            } else if(file == 'd'){
                img = "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg";
            } else if(file == 'e'){
                img = "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg";
            }
        } else if(rank == 8){
            if(file == 'a' || file == 'h'){
                img = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
            } else if(file == 'b' || file == 'g'){
                img = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg";
            } else if(file == 'c' || file == 'f'){
                img = "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
            } else if(file == 'd'){
                img = "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
            } else if(file == 'e'){
                img = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
            }
        }

        return (
            <div onClick={this.handleClick} className={`Square Square-${this.props.color} Square-${this.props.coord}`}>
                {
                    (img) ? <img height={110} width={110} alt="piece" src={img} /> : null
                }
            </div>
        )
    }
}

export default Square;