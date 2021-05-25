import React from 'react';
import useStyles from './CompleteStyle'
import "../../styles/Games.css";
import { MdInfoOutline } from "react-icons/md";
import {useSelector} from 'react-redux';
import {Card,Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
export const GameID = () => {
    const classes = useStyles();
    const state = useSelector(state=>state);
    const upcoming = state.state.coming.matches;
    return (
        <div className='section'>
        {upcoming? upcoming.map((m)=>
          <Card  className={classes.card} key={m.uuid}>
               <Link to={`/Home/Games/${m.uuid}/Gameds`} className="product__link">
          <div className={classes.div} >
          <img src="https://app.alvoraplay.com/assets/subgraphic-desktop-footer-left.png"alt="/" className={classes.img}></img>
          <div className={classes.textbox}>
              <Typography variant="h5" className={classes.head}>
                  {m.name}
              </Typography>
          </div>
          <div className={classes.textbox1}>
              <Typography variant="h5" className={classes.head}>
              ₹ {m.entry_amount}
              </Typography>
          </div>
          <div className={classes.textbox2}>
              <Typography variant="h6" className={classes.head}>
                  {m.last_entry_at}
              </Typography>
          </div>
          <div className={classes.textbox3}>
              <Typography variant="h6" className={classes.head}>
              ₹  {m.win_amount}
              </Typography>
          </div>
          <div className={classes.textbox4}>
              <Typography variant="h6" className={classes.head}>
                  Match Name
              </Typography>
          </div>
          <div className={classes.textbox5}>
              <Typography variant="h6" className={classes.head}>
                  Entry
              </Typography>
          </div>
          <div className={classes.textbox6}>
              <Typography variant="h6" className={classes.head}>
                  Event date
              </Typography>
          </div>
          <div className={classes.textbox7}>
              <Typography variant="h6" className={classes.head}>
                  Prize
              </Typography>
          </div>
          </div> 
          </Link>  
      </Card>)
        :
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
         <h4 >< MdInfoOutline /></h4>
                    <h6>No upcoming matches for this game.</h6>
                    <br/>
                    <p>Please check in some time</p>
        </div>}
    </div>
)
}