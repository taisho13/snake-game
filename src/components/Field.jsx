import React  from 'react';

const Field = () => {
    return(
        <div>
            <p>field</p>
            {
            new Array(35 * 35).fill('').map(() => <div className="dots"></div>)
            }   
        </div>
    );
};

export default Field;