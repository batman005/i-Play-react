import React from "react";
import "../../styles/Zone.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import HelpIcon from "@material-ui/icons/Help";
import ErrorIcon from "@material-ui/icons/Error";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import HeadsetIcon from "@material-ui/icons/Headset";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'
export default function Zonebuttons() {
  return (
    <div id="Zonebuttons">
      <div className="container">
        <div className="row">
          <div className="col s12 nav_list">
            <ul className="collection">
              <Link to="/Zone/Profile" style={{ textDecoration: 'none' }}>
                <li>
                  <i className="icon">
                    <AccountCircleIcon />
                  </i>
                  <span> My Profile</span>
                  <i className="arrow-icon">
                    <ArrowForwardIosIcon />
                  </i>
                </li>
                <hr />
              </Link>
              <Link to="/Zone/Wallet" style={{ textDecoration: 'none' }}>
                <li>
                  <i className="icon">
                    {" "}
                    <AccountBalanceWalletIcon />{" "}
                  </i>
                  <span target="_blank"> My Wallet</span>{" "}
                  <i className="arrow-icon">
                    <ArrowForwardIosIcon />
                  </i >
                </li>
                <hr />
              </Link>
              <li>
                <i className="icon">
                  <HelpIcon />
                </i>
                <span> App Tutorial </span>{" "}
                <span className="arrow-icon">
                  <ArrowForwardIosIcon />
                </span>
              </li>
              <hr />
              <li>
                <i className="icon">
                  <ErrorIcon />
                </i>
                <span> About Us</span>{" "}
                <span className="arrow-icon">
                  <ArrowForwardIosIcon />
                </span>
              </li>
              <hr />
              <li>
                <i className="icon">
                  <HeadsetIcon />
                </i>
                <span> Customer Support</span>{" "}
                <span className="arrow-icon">
                  <ArrowForwardIosIcon />
                </span>
              </li>
              <hr />
              <li>
                <i className="icon">
                  <EventNoteIcon />
                </i>
                <span> Terms and Conditions </span>{" "}
                <span className="arrow-icon">
                  <ArrowForwardIosIcon />
                </span>
              </li>
              <hr />
              <Link to="/"  style={{ textDecoration: 'none' }}>
                <li>
                  <i className="icon">
                    <ExitToAppIcon />
                  </i>
                  <span> Logout </span>{" "}
                  <span className="arrow-icon">
                    <ArrowForwardIosIcon />
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
