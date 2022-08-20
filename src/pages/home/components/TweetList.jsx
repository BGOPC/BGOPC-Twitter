import React from 'react';
import useStyles from "../styles";
import {Grid, IconButton, Typography} from "@material-ui/core";

const Tweet = () => {
    const classes = useStyles();
    return (
        <div className={classes.Tweet}>
            <Grid container>
                <img src="images/unknown.png" alt="user" style={{
                    width: "8%",
                    borderRadius: "50%",
                }}/>
                <div className={classes.TweetUserInfo}>
                    <Typography className={classes.TweetUsername}>User Name</Typography>

                    <Typography className={classes.TweetUserid}>User ID</Typography>
                </div>
                <textarea  className={classes.TweetMsg}>
                    Hello, today i was programming and then i got an error, then i fixed it. HaHaHA
                    Hello, today i was programming and then i got an error, then i fixed it. HaHaHA
                </textarea>
            </Grid>

            <Grid container direction={"row-reverse"}>
                <IconButton variant={"contained"} className={classes.Likebutton}>
                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                </IconButton>
            </Grid>

        </div>
    );
}

const TweetList = () => {
    return (
        <div><Tweet/></div>
    );
};

export default TweetList;