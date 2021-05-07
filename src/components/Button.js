import React  from 'react';
import { GameStatus } from '../constants';

const Button = ({onStop,onStart,status,onRestart}) => {
    return(　
        <div className = "button">
            {status === GameStatus.gameover  && <button className = 'btn btn-gameover'  onClick = {onRestart}>Game Over</button>}
            {status === GameStatus.init      && <button className = 'btn btn-init'      onClick = {onStart}>start</button>}
            {status === GameStatus.suspended && <button className = 'btn btn-suspended' onClick = {onStart}>start</button>}
            {status === GameStatus.playing   && <button className = 'btn btn-playing'   onClick = {onStop}>stop</button>}
        </div>
    );
};

export default Button;