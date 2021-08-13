import React, {FC} from 'react';
import './landing-page.css';
import NavBar from "../../components/nav-bar/nav-bar";
import SideBar from "../../components/side-bar/side-bar";
import LandingText from "../../components/landing-text/landing-text";

export const LandingPage: FC = (): JSX.Element => {
  return (
 <div className="lp-container">
     <NavBar/>
     <LandingText/>
     <SideBar/>
 </div>
  )
}


export default LandingPage;
