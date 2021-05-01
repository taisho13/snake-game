import React  from 'react';

const Button = ({onStart,status,onRestart}) => {
    return(
        <div>
            {
              status === 'gameover' ?
            <button onClick = {onRestart}>Game Over</button> 
            :   
            <button onClick = {onStart}>start</button>
            }
        </div>
    );
};

export default Button;