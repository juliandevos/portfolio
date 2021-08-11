import React, {FC} from 'react';
import './nav-bar.css';
import {NavBarItem} from "./nav-bar-item";
import Logo from "../../assets/logo_small.png"

export const NavBar: FC = (): JSX.Element => {
    return (
        <>
        <div className="nav-bar-container">
            <p className="resume">Resume</p>
            <NavBarItem navBarNumber="04." navBarText="Contact" navBarHref="/home"/>
            <NavBarItem navBarNumber="03." navBarText="Work" navBarHref="/home"/>
            <NavBarItem navBarNumber="02." navBarText="Experience" navBarHref="/home"/>
            <NavBarItem navBarNumber="01." navBarText="About" navBarHref="/home"/>
            <img className="logo" src={Logo}/>
        </div>
            <div className="border"></div>
            </>
    )
}


export default NavBar;