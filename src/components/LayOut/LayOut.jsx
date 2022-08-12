import React from 'react'
import useStyles from './styles';
import { Divider } from '@material-ui/core';
import RightSideBar from '../RightBar/RightSideBar';
import LeftSideBar from '../LeftBar/LeftSideBar';
import Home from "../../pages/home/home";

function LayOut() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LeftSideBar/>
      <Divider orientation={"vertical"} className={classes.divider}/>
      <Home/>
      <Divider orientation={"vertical"} className={classes.divider}/>
      <RightSideBar/>
      </div>
  )
}

export default LayOut;
