import React from 'react';
import useStyles from "./styles";
import Header from "./components/Header";
import NTweet from "./components/NTweet";
import {Divider} from "@material-ui/core";
import TweetList from "./components/TweetList";

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header></Header>
            <Divider className={classes.divider}/>
            <NTweet></NTweet>
            <Divider className={classes.divider}/>
            <TweetList></TweetList>
        </div>
    );
};

export default Home;