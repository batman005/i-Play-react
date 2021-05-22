/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useParams } from 'react-router-dom';
import useStyles from './PostStyles';
import {Card,Typography,CardContent} from '@material-ui/core';
import {useSelector} from 'react-redux';
import "../../styles/News.css"
export const Post = () => {
    const classes = useStyles();
    const allnews = useSelector(state=>state);
    const news = allnews.state.news.announcements; 
    console.log("accessToken",allnews);
    const postId = useParams();
    console.log("post id is :",postId.id);
    const News = news.filter((news => news.id === parseInt(postId.id)));
    console.log(News);
    return (
        <div className={classes.root}> 
        {   News? News.map((n)=>
            <Card className={classes.card} key={n.id} >
                <div className={classes.div}>
                <img src={n.image} alt="/" className={classes.img}></img>
                </div>
                <CardContent>
                <Typography variant="h4" className={classes.head}>
                        {n.title}
                        <br/>
                        {n.created_at}
                    </Typography> 
          <Typography variant="body2" color="inherit" component="p">
             {n.body}
          </Typography>
        </CardContent>      
            </Card>
            
        )
        :
            <div>
      </div>
}
        </div>
    );
}