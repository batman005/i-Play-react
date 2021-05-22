/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState} from 'react'
import useStyles from './newsStyles';
import {Card,Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';
import "../../styles/News.css"
import {Link} from 'react-router-dom';
export const News = () => {
    const classes = useStyles();
    const allnews = useSelector(state=>state);
    const news = allnews.state.news.announcements; 
    const [id,setId] = useState(null);
    const goToews = () => {
        console.log("news id is : ",id);
    }
        useEffect(()=>{
            goToews();
            setId(null);
        }, [allnews] );
    return (
        <div className={classes.root}>

        { news ? news.map((n)=>
            <Card  className={classes.card}onClick={()=>{setId(n.id)}}  key={n.id}>
                <div className={classes.div} >
                <Link to={`/News/post/${n.id}`} className="product__link">
                <img src={n.image} alt="/" className={classes.img}></img>
                <div className={classes.textbox}>
                    <Typography variant="h5" className={classes.head}>
                        {n.title}
                        <br/>
                        {n.created_at}
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
    );
}
