import React from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
export const GameID = () => {
    return (
        <div>
             <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <span class="material-icons md-48"><InfoOutlinedIcon/></span>
                        <h1>No upcoming matches for this game.</h1>
                        <p>Please check in some time</p>
            </div>
        </div>
    )
}