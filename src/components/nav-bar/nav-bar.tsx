import React, {FC} from 'react';
import './nav-bar.css';
import {NavBarItem} from "./nav-bar-item";

export const NavBar: FC = (): JSX.Element => {
    return (
        <>
        <div className="nav-bar-container">
            <p className="resume">Resume</p>
            <NavBarItem navBarNumber="1." navBarText="About me" navBarHref="/home"/>
            <NavBarItem navBarNumber="1." navBarText="About me" navBarHref="/home"/>
            <NavBarItem navBarNumber="1." navBarText="About me" navBarHref="/home"/>
            <NavBarItem navBarNumber="1." navBarText="About me" navBarHref="/home"/>
        </div>
            <div className="border"></div>
            </>
    )
}


export default NavBar;