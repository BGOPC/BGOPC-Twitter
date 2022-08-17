import React from 'react';
import HomeIcon from "@material-ui/icons/Home"
import useStyles from "../styles";
import {Typography} from "@material-ui/core";
const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <HomeIcon></HomeIcon>
            <Typography className={classes.Ht}>Home</Typography>
        </div>
    );
};

export default Header;