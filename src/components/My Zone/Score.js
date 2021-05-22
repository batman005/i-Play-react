import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import "../../styles/Zone.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Score() {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const match = state.state.data.user.match_played;
  const won = state.state.data.user.earn_amount;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Paper
              className={classes.paper}
              style={{
                fontSize: "3rem",
                backgroundColor: "black",
                color: "#9dce02",
              }}
            >
             <h4>{match}</h4>
            </Paper>
            <p className="info lh-1-1">Matches Played</p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Paper
              className={classes.paper}
              style={{
                fontSize: "3rem",
                backgroundColor: "black",
                color: "#9dce02",
              }}
            >
             <h4>{won}</h4> 
            </Paper>
            <p className="info lh-1-1">Amount Won</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
