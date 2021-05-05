
import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const ManipulationPanel = ({onChange}) => {
    
    const onUp = () => onChange('up')
    const onRight = () => onChange('right')
    const onLeft = () => onChange('left')
    const onDown = () => onChange('down')
    return(
        <div className = "manipulation-panel">
            <button className = 'manipulation-btn btn btn-left'  onClick = {onLeft}>
            <ArrowBackIcon/>
            </button>
            <div>
            <button className = 'manipulation-btn btn btn-up'    onClick = {onUp}>
            <ArrowUpwardIcon/>
            </button>
            <button className = 'manipulation-btn btn btn-down'  onClick = {onDown}>
            <ArrowDownwardIcon/>
            </button>
            </div>
            <button className = 'manipulation-btn btn btn-right' onClick = {onRight}>
            <ArrowForwardIcon/>
            </button>
        </div>

    );
};

export default ManipulationPanel;