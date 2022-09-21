import React from "react";
import './NotFound.css';

function NotFound () {
    return (
        <div className="notFound">
            <p className="notFound__status">404</p>
            <p className="notFound__text">Страница не найдена</p>            
        </div>
    )
}

export default NotFound;