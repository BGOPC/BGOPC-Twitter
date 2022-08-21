import React from 'react';
import useStyles from "../styles";
import {Divider, Grid, IconButton, Typography} from "@material-ui/core";

var Tweets = [
    {
        ProfIMG:"unknown.png",
        name:"User Name",
        id:"User ID",
        msg:"User MSG",
    },
    {
        ProfIMG:"unknown.png",
        name:"User Name",
        id:"User ID",
        msg:"User MSG",
    },
    {
        ProfIMG:"unknown.png",
        name:"User Name",
        id:"User ID",
        msg:"User MSG",
    },
    {
        ProfIMG:"unknown.png",
        name:"User Name",
        id:"User ID",
        msg:"User MSG",
    },
]

const Tweet = ({ProfIMG,name,id,msg}) => {
    const classes = useStyles();
    return (
        <div className={classes.Tweet}>
            <Grid container>
                <img src={"images/" + ProfIMG} alt={name+id} style={{
                    width: "8%",
                    borderRadius: "50%",
                }}/>
                <div className={classes.TweetUserInfo}>
                    <Typography className={classes.TweetUsername}>{name}</Typography>

                    <Typography className={classes.TweetUserid}>{id}</Typography>
                </div>
                <textarea  className={classes.TweetMsg}>
                    {msg}
                </textarea>
            </Grid>

            <Grid container direction={"row-reverse"}>
                <IconButton variant={"contained"} className={classes.Likebutton}>
                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                </IconButton>
            </Grid>
            <Divider className={classes.divider} style={{
                marginTop:"1rem"
            }}/>

        </div>
    );
}

const TweetList = () => {
    return (
        <div>
            {Tweets.map(tweet => {
                return <Tweet ProfIMG={tweet.ProfIMG} name={tweet.name} msg={tweet.msg} id={tweet.id}/>
                }
            )}
        </div>
    );
};

export default TweetList;