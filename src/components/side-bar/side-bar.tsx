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
                <p className="side-bar-text">juliandevos2000@gmail.com</p>
                <div className="side-bar-line-right"></div>
                <div className="icons-container">

                    <a>
                    <FiGithub className="icons"/>
                    </a>

                    <a>
                    <FiLinkedin className="icons"/>
                    </a>

                    <a>
                    <RiDiscordLine className="icons"/>
                    </a>

                    <a>
                        <FiInstagram className="icons"/>
                    </a>

                    <a>
                        <SiGmail className="icons"/>
                    </a>

                    {/*<a href="mailto:email@example.com">Send Email</a>*/}

                </div>
                <div className="side-bar-line-left"></div>

            </div>
    )
}


export default SideBar;