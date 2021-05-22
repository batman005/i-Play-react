import React from "react";
import "../../styles/Zone.css";
import { useSelector } from "react-redux";
import Zonebuttons from "./Zonebuttons";
import Score from "./Score";
import logo from "../../assets/alvora-icon-logo.png";
import 'materialize-css/dist/css/materialize.min.css';
export const Zone = () => {
  const state = useSelector((state) => state);
  const name = state.state.data.user.full_name;
  const credits = state.state.data.user.credits;
  return (
    <>
    <div>
      <div id="Zone">
        <div className="intro">
          <img className="col s3 logo-img" src={logo} alt="Logo" />
          <div className="overlay">
            <div className="container">
              <div className="row">
              <div className="row user_details_card mb-0 ">
                  <div className='col s10'>
                    <h3>
                      {name}
                    </h3>
                    <h5 className='mt-0'>iPlay Credits:{credits}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Score />
        <Zonebuttons />
        </div>
      </div>
    </>
  );
};
