import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { NextComponentType } from "next";

import { useStyles } from '../styles/home'; 

const Home: NextComponentType = () =>{
  const classes = useStyles();

  return(
    <div>
      <Grid container spacing={2} className={classes.root}>
        {/* introduction */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        {/* 個人活動 */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
       {/* 学歴 &　活動履歴 */}

    </div>
  )
}

export default Home;