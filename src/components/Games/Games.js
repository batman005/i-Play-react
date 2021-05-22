/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import useStyles from './GameStyles';
import {Card,Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';
import  Pubg    from  '../../assets/Pubg.jpg'
import "../../styles/Games.css";
export const Game = () => {

    const classes = useStyles();
    const state = useSelector(state=>state);
    const match = state.state.data.user.match_played;
    return (
         <div>
             <div className="section">
        <div className={classes.root}>
            <Card className={classes.card}>
                <div className={classes.div}>
                <img src={Pubg} alt="/" className={classes.img}></img>
                <div className={classes.textbox}>
                    <Typography variant="h4" className={classes.head}>
                        PUB-G
                    </Typography>
                </div>
                <div className={classes.textbox1}>
                    <Typography variant="h4" className={classes.head}>
                        {match}
                    </Typography>
                </div>
                </div>      
            </Card>
            </div>
            </div>
            </div>
        )

        }
