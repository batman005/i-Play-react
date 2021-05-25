import React from 'react';
import "../../styles/Games.css";
import {useSelector} from 'react-redux';
import {Card,Typography,CardContent} from '@material-ui/core';
import useStyles from './NewStyles';
import '../../styles/Games.css';
export const NewID = () => {
    const classes = useStyles();
    const state = useSelector(state=>state);
    const upcoming = state.state.coming.matches;
    return (
        <div className={classes.root}> 
        {   upcoming? upcoming.map((n)=>
            <Card className={classes.card} key={n.uuid} >
                <div className={classes.div}>
                <img src={n.map.game.cover_image} alt="/" className={classes.img}></img>
                </div>
                <CardContent>
                <Typography variant="h4" className={classes.head}>
                        {n.name}
                        </Typography>
                        <Typography variant="h6" className={classes.date}>
                        Start    {n.starts_at}
                    </Typography>
                    <Typography variant="h6" className={classes.date}>
                        End at   {n.last_entry_at}
                    </Typography>  
                    <Typography variant="h6" className={classes.head1}>
                        {n.squad_type.name} |  {n.map.name} | {n.view_type}
                    </Typography>
                    <br/>
         <Typography className={classes.news} variant="body2" color="inherit" component="h7">
            Spot Left : {n.spot_left}
          </Typography> 
          <Typography className={classes.news} variant="body2" color="inherit" component="h7">
            player joined : {n.players_joined}
          </Typography> 
          <br/>
          <Typography className={classes.news}  variant="body2" color="inherit" component="h7">
               {n.description}
          </Typography>
        </CardContent> 
        <div className="btn col s6 green center profile-btn waves-effect waves-light">
                      <span className="center">Join now</span>
                    </div>
            </Card>
            
        )
        :
            <div>
      </div>
}
        </div>
)
}