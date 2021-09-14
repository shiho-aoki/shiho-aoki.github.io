import React from "react";
import { NextComponentType } from "next";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

import { useStyles } from '../styles/header'; 

const Header: NextComponentType = () =>{
  const classes = useStyles();

  return(
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="avatar">
            <Avatar alt="SA" src="/images/myavater.jpeg" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Foo
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
  )
}

export default Header;