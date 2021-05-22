import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { AppBar, Toolbar, Grid, Button} from '@material-ui/core';
import useStyles from './footerStyles.js';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom';
import {news} from '../../actions/actions';
import {wallet} from '../../actions/actions';
import clsx from "clsx";
export const Navbar = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const state = useSelector(state => state.state);
    const token = JSON.stringify(state.data.access_token);
    console.log("access token ", token);
    const getWallet = () => {
      dispatch(wallet(token));
    }
    const getNews = () => {
        dispatch(news(token));
    }
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();
    const buttonClassname = clsx({
      [classes.buttonSuccess]: success
    });
    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
    const handleButtonClick = () => {
      if (!loading) {
        setSuccess(false);
        setLoading(true);
        timer.current = setTimeout(() => {
          setSuccess(true);
          setLoading(false);
        }, 1000);
      }
    };
    return (
        <AppBar position="fixed" className={classes.appbar} style={{ backgroundColor:" black ",Color:" white "}}>
            <Toolbar>
                <Grid container spacing={2} className={classes.grid}>
                    {/* News Button */}
                    <Grid item xs={4} className={classes.grid}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <Button className={classes.button}
                        component={Link} to='/News'>
                         <NotificationsActiveIcon style={{color:'white'}} onClick={getNews} />
                        </Button>
                        News
                        </div>
                    </Grid>
                    {/* Games Button */}
                    <Grid item xs={4} className={classes.grid}>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",color:"white"}}>
                        <Button className={classes.button}
                            component={Link} to='/Home'>
                            <SportsEsportsIcon style={{color:'white'}} />
                        </Button>
                        Games
                        </div>
                    </Grid>
                    {/* My Profile */}
                    <Grid item xs={4} className={classes.grid}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} >
                        <Button className={buttonClassname} disabled={loading}
                           onClick={handleButtonClick}
                        component={Link} to='/Zone'>
                             <Backdrop className={classes.backdrop}  open={loading}>
                           <CircularProgress color="inherit" />
                               </Backdrop>
    
                            <AccountCircleIcon style={{color:'white'}} onClick={getWallet}/>
            
                        </Button>
                        Zone
         
                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}