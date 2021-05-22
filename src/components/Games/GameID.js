import React from 'react';
import "../../styles/Games.css";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
export const GameID = () => {
    return (
        <div className='section'>
              <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <h4 className="material-icons md-10"><InfoOutlinedIcon size="32"/></h4>
                        <h6>No upcoming matches for this game.</h6>
                        <br/>
                        <p>Please check in some time</p>
            </div>
        </div>
    )
}