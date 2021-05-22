import React from 'react';
import {AppBar, Toolbar, Button, Grid} from '@material-ui/core';
import useStyles from './TabStyles';
import {Link} from 'react-router-dom';
import {grey} from '@material-ui/core/colors';
import {wallet} from '../../actions/actions';
import {useDispatch,useSelector} from 'react-redux';
export const Tab = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const state = useSelector(state => state.state);
    const token = JSON.stringify(state.data.access_token);
    const handleSubmit = () =>{
        submit();
    }
    const submit = () => {
    console.log(token);
    dispatch(wallet(token)).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

    return (
        <div>
          <AppBar position="static" style={{backgroundColor:grey[900]}}>
              <Toolbar>
                  <Grid container spacing={3}>
                      {/* Notification */}
                    <Grid  item sm={6} className={classes.gridItem} onClick={handleSubmit}>
                        <Button className={classes.button} component={Link} to="/Zone/Wallet">
                         Wallet 
                        </Button>
                    </Grid>
                      {/* Live */}
                    <Grid item sm={6} className={classes.gridItem} onClick={handleSubmit}>
                        <Button className={classes.button} component={Link} to="/Zone/Transactions">
                       Transactions
                        </Button>
                    </Grid>
                  </Grid>
              </Toolbar>
          </AppBar>
        </div>
    );
}
