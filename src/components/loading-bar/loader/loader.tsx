import './loader.css';
import React, {FC} from "react";
import Loop from "../../text-loop/text-loop";

interface LoaderProps {
    progress: any
}


export const Loader: FC<LoaderProps> = ({progress}): JSX.Element => {

    return (
        <div className="loader-container">
            <div className="loader">
                <div className="loader-bar" style={{width: `${progress}%`}}/>
                <p className="lp-title">
                    <span className="lp-user">Guest-user:</span>
                    <span className="lp-folder">&nbsp; ~/Desktop: &nbsp;</span>
                    <span className="lp-errors">
                        <Loop/>
                    </span>
                </p>
            </div>

        </div>
    )
}


export default Loader;