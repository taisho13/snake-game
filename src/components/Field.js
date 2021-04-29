
import React  from 'react';

const Field = ({fields}) => {
    return(
        <div className = "Field">
            {
            fields.map((row,key) => {
                return row.map((column) => {
                return <div className={`dots ${column}`}></div>
                })
            })
            }
        </div>  
    );
};

export default Field;