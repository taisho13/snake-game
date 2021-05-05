import React  from 'react';

const Button = ({onStop,onStart,status,onRestart}) => {
    return(
        <div className = "button">
            {status === "gameover"  && <button className = 'btn btn-gameover'  onClick = {onRestart}>Game Over</button>}
            {status === "init"      && <button className = 'btn btn-init'      onClick = {onStart}>start</button>}
            {status === "suspended" && <button className = 'btn btn-suspended' onClick = {onStart}>start</button>}
            {status === "playing"   && <button className = 'btn btn-playing'   onClick = {onStop}>stop</button>}
        </div>
    );
};

export default Button;