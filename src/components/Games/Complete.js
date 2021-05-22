import React from 'react';
import {Card,Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';
import "../../styles/Games.css";
import useStyles from './CompleteStyle';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


export const CompleteID = () => {
    const classes = useStyles();
    const state = useSelector(state=>state);
    const matches = state.state.matches.matches;
    return (
        <div className='section'>
            {matches? matches.map((m)=>
              <Card  className={classes.card} key={m.uuid}>
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
          </Card>)
            :
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
             <h4 ><InfoOutlinedIcon /></h4>
                        <h6>No Complete matches for this game.</h6>
                        <br/>
                        <p>Please check in some time</p>
            </div>}
        </div>
    )
}