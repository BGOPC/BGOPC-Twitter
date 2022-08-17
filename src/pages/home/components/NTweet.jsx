import React from 'react';
import useStyles from "../styles";
import {Button, Grid} from "@material-ui/core";

const NTweet = () => {
    const classes = useStyles();
    return (
        <div className={classes.Tweet}>
            <Grid container>

                <img src="images/unknown.png" alt="user" style={{
                    width: "8%",
                    borderRadius: "50%",
                }}/>
                <textarea placeholder={"New NTweet"} className={classes.input}></textarea>
            </Grid>
            <Grid container direction={"row-reverse"}>
                <Button variant={"contained"} className={classes.button}>Tweet</Button>
            </Grid>
        </div>
    );
};

export default NTweet;