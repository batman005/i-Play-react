import React from 'react';
import {AppBar, Toolbar, Button, Grid} from '@material-ui/core';
import useStyles from './GameTabStyles';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {complete} from '../../actions/actions';
import {live} from '../../actions/actions';
export const GameTab = () => {
  const dispatch = useDispatch();
    const classes = useStyles();
    const state = useSelector(state => state.state);
    const id = useParams();
    const uuid =(id.uuid);
    const token = JSON.stringify(state.data.access_token);
    const getLive = () => {
      dispatch(live(token,uuid));
    }
    const getComplete = () => {
      dispatch(complete(token,uuid));
    }
    return (
        <div>
          <AppBar position="static" style={{backgroundColor:"#211f1f"}}>
              <Toolbar>
                  <Grid container spacing={3}>
                      {/* ONGOING */}
                    <Grid  item sm={4} className={classes.gridItem}>
                      <Link to={`/Home/Games/Live/${uuid}`}>
                        <Button className={classes.button} onClick={getLive}>
                        ONGOING
                        </Button>
                      </Link>
                    </Grid>
                      {/* UPCOMING */}
                    <Grid  item sm={4} className={classes.gridItem}>
                    <Link to={`/Home/Games/${uuid}`}>
                        <Button className={classes.button}>
                      UPCOMING
                        </Button>
                      </Link>
                    </Grid>
                      {/* RESULTS */}
                      <Grid item sm={4} className={classes.gridItem}>
                      <Link to={`/Home/Games/Complete/${uuid}`}>
                        <Button className={classes.button}  onClick={getComplete}>
                         RESULTS
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
              </Toolbar>
          </AppBar>
        </div>
    );
}