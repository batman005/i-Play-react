import React from 'react';
import "../../styles/Games.css";
import { MdInfoOutline } from "react-icons/md";
export const LiveID = () => {
    return (
        <div className='section'>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <h4 className="material-icons md-10"><MdInfoOutline size='40'/></h4>
                        <h6>No Live matches for this game.</h6>
                        <br/>
                        <p>Please check in some time</p>
            </div>
        </div>
    )
}