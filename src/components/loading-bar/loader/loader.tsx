import './loader.css';
import React, {FC} from "react";
const { useState, useEffect } = React;

interface LoaderProps {
    message?: string;
    progress: any
}


export const Loader: FC<LoaderProps> = ({progress, message}): JSX.Element => {

    return (
        <div className="loader-container">
            <div className="loader">
                <div className="loader-bar" style={{width: `${progress}%`}}/>
            </div>
            <span className="loading-text">{message}</span>
        </div>
    )
}


export default Loader;