import React, {FC} from 'react';
import './nav-bar-item.css';

export interface NavBarItemProps {
    navBarNumber: string;
    navBarText: string;
    navBarHref: string;
}

export const NavBarItem: FC<NavBarItemProps> = ({
                                                    navBarNumber,
                                                    navBarText,
                                                    navBarHref
                                                }): JSX.Element => {

    return (
        <div className="nav-bar-item">
            <a className="nav-bar-text" href={navBarHref}>{navBarText}</a>
            <p className="nav-bar-number">{navBarNumber}</p>

        </div>
    )
}
