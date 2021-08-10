import React, {FC} from 'react';
import './landing-page.css';
import NavBar from "../../components/nav-bar/nav-bar";

export const LandingPage: FC = (): JSX.Element => {
  return (
 <div className="lp-container">
     <NavBar/>
 </div>
  )
}


export default LandingPage;
