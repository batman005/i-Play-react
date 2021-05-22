/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import useStyles from './GameStyles';
import {Card,Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';
import "../../styles/Games.css";
import {Link} from 'react-router-dom';
export const Game = () => {
    const classes = useStyles();
    const allgames = useSelector(state=>state);
    const game = allgames.state.games.games; 
    const [uuid,setUuid] = useState(null);
    const goToews = () => {
        console.log("news id is : ",uuid);
    }
        useEffect(()=>{
            goToews();
            setUuid(null);
        }, [allgames] );
    return (
        <div id='Games'className='section'>
        <div className={classes.root}>

        { game ? game.map((n)=>
            <Card  className={classes.card}onClick={()=>{setUuid(n.uuid)}}  key={n.uuid}>
                <div className={classes.div} >
                <Link to={`/Home/Games/${n.uuid}`} className="product__link">
                <img src={n.cover_image} alt="/" className={classes.img}></img>
                <div className={classes.textbox}>
                    <Typography variant="h5" className={classes.head}>
                        {n.name}
                    </Typography>
                </div>
                <div className={classes.textbox1}>
                    <Typography variant="h5" className={classes.head}>
                        {n.upcoming_matches_count}
                    </Typography>
                </div>
                </Link>
                </div>      
            </Card>
        )
        :
        <div>
      
      </div>
}
        </div>
        </div>
    );
}