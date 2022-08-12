import {ButtonBase, Grid, Typography} from '@material-ui/core'
import React from 'react'
import useStyles from './styles';

function LeftSideBar() {
  let hashtags = [
    'Covid 19',
    "Corona Virus"
  ];
  const cc = useStyles();
  return (
      <div className={cc.root}>
        <Grid container alignItems={"center"} direction={"row-reverse"}>
          <Grid item>
            <img src="images/twitter.png" alt="Twitter" width={"90%"}/>
          </Grid>
          &nbsp;
          <Grid>
            <Typography variant="h2" className={cc.logo}>
              Twitter
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction={"row-reverse"} className={cc.hashtags}>
          <Typography class={cc.HashTagTop}>
            Most Used #
          </Typography>
          <Grid container item direction="row-reverse">
            {
              hashtags.map(hashtag => {
                return (
                    <ButtonBase className={cc.hashtagParent}>
                      <Grid item container direction={"row-reverse"}>
                        <img src="images/hashtag.png" width={"15%"} alt="hashtag"
                             className={cc.hashtagImg}/>
                        <Typography className={cc.hashtag}>{hashtag}</Typography>

                      </Grid>
                    </ButtonBase>
                )
              })
            }

          </Grid>
        </Grid>
      </div>
  )
}

export default LeftSideBar