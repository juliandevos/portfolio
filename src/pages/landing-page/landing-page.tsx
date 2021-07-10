import React, {FC} from 'react';
import './landing-page.css';
import Tester from "../../components/loading-bar/tester/tester";

export const LandingPage: FC = (): JSX.Element => {
  return (
 <div className="lp-container">
     <Tester/>
 </div>
  )
}


export default LandingPage;
