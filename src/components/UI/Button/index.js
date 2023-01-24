import React from 'react';
import { Link } from 'react-router-dom';

const ButtonComp = () => {
    return (
        <>
            <div className="btn-wrapper">
                <Link to="/"> Button </Link>
            </div>   
        </>
    );
};

export default ButtonComp;