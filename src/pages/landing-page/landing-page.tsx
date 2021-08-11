import React, {FC} from 'react';
import './landing-page.css';
import NavBar from "../../components/nav-bar/nav-bar";
import SideBar from "../../components/side-bar/side-bar";

export const LandingPage: FC = (): JSX.Element => {
  return (
 <div className="lp-container">
     <NavBar/>
     <SideBar/>
 </div>
  )
}


export default LandingPage;
