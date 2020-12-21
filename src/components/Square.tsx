import React from 'react';

interface Props {
    name: string;
    color: string;
    coord: string
}

const Square: React.FC<Props> = (props) => {
    
    return (
        <div className={`h-12 w-12 ${props.color === 'dark' ? 'bg-green-500': 'bg-gray-50'}`}></div>
    )
}

export default Square;