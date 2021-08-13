import React, {FC} from 'react';
import './side-bar.css';
import {FiInstagram} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';
import {RiDiscordLine} from "react-icons/ri";
import {FiGithub} from 'react-icons/fi';
import {SiGmail} from "react-icons/si";

export const SideBar: FC = (): JSX.Element => {
    return (
            <div className="side-bar-container">
                <a className="side-bar-text" href="mailto:juliandevos2000@gmail.com">juliandevos2000@gmail.com</a>
                <div className="side-bar-line-right"></div>
                <div className="icons-container">

                    <a href="https://github.com/juliandevos">
                    <FiGithub className="icons"/>
                    </a>

                    <a href="https://www.linkedin.com/in/julian-de-vos-64b1aa1aa/">
                    <FiLinkedin className="icons"/>
                    </a>

                    <a>
                    <RiDiscordLine className="icons"/>
                    </a>

                    <a href="https://www.instagram.com/juliandevos_/">
                        <FiInstagram className="icons"/>
                    </a>

                    <a href="mailto:juliandevos2000@gmail.com">
                        <SiGmail className="icons"/>
                    </a>

                </div>
                <div className="side-bar-line-left"></div>

            </div>
    )
}


export default SideBar;