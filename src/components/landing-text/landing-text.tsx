import React, {FC} from 'react';
import './landing-text.css';

export const LandingText: FC = (): JSX.Element => {
    return (
        <>
            <div className="landing-text-container">
                <p className="intro-text">Hi, my name is</p>
                <h2 className="intro-name">Julian de Vos.</h2>
                <h3 className="intro-header">I build things for the web. </h3>
                <p className="intro-description">I'm a software engineer student specializing in building
                    front <br/>and back-end applications for the web. Currently, I'm focused <br/> on building
                    front-end websites with a minimalist design and <br/> getting my bachelor of science degree at
                    <a className="intro-hogeschool" href="https://www.hva.nl/">&nbsp; Hogeschool
                        van <br/> Amsterdam</a>
                    .</p>

            </div>

        </>
    )
}


export default LandingText;