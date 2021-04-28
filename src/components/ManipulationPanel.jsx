import { Button } from '@material-ui/core';
import React from 'react';

const ManipulationPanel = () => {
    return(
        <div className = "ManipulationPanel">
            <button>←</button>
            <button>↑</button>
            <button>↓</button>
            <button>→</button>
        </div>

    );
};

export default ManipulationPanel;