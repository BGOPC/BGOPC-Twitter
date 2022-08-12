import React from 'react';
import useStyles from "./styles";

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Home
        </div>
    );
};

export default Home;