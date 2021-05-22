import React from 'react';
import {AppBar, Toolbar, Button, Grid} from '@material-ui/core';
import useStyles from './GameTabStyles';
import {Link} from 'react-router-dom';
export const GameTab = () => {
    const classes = useStyles();
    return (
        <div>
          <AppBar position="static" style={{backgroundColor:"gray"}}>
              <Toolbar>
                  <Grid container spacing={3}>
                      {/* ONGOING */}
                    <Grid sm={4} className={classes.gridItem}>
                      <Link to="/">
                        <Button className={classes.button}>
                        ONGOING
                        </Button>
                      </Link>
                    </Grid>
                      {/* UPCOMING */}
                    <Grid sm={4} className={classes.gridItem}>
                    <Link to="/">
                        <Button className={classes.button}>
                      UPCOMING
                        </Button>
                      </Link>
                    </Grid>
                      {/* RESULTS */}
                      <Grid sm={4} className={classes.gridItem}>
                      <Link to="/">
                        <Button className={classes.button}>
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