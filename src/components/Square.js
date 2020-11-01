import React from 'react';
import './Square.scss';

class Square extends React.Component {
    render(){
        console.log();
        return (
            <div className={`Square Square-${this.props.color} Square-${this.props.coord}`}></div>
        )
    }
}

export default Square;