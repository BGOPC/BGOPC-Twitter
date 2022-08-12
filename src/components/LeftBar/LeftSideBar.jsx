import {ButtonBase, Divider, Grid, Typography} from '@material-ui/core'
import useStyles from './styles'
import React from 'react'

let conts = [
    {
        name:"User Name",
        id:"userid",
        img:"images/unknown.png"
    },
    {
        name:"User Name",
        id:"userid",
        img:"images/unknown.png"
    },
    {
        name:"User Name",
        id:"userid",
        img:"images/unknown.png"
    },
]

function Contributor({name, id, img}) {
    const classes = useStyles();

    return (
        <ButtonBase>
            <Grid container direction={"row"} style={{marginBottom:"0.5rem"}}>
                <img src={img} alt="profile" style={{
                    width: "10%",
                    borderRadius: "50%",
                    marginRight:"3%",
                }}/>
                <Grid direction={"column"} container item className={classes.ContText}>
                    <Typography className={classes.un}>{name}</Typography>
                    <Typography className={classes.uid}>@{id}</Typography>
                </Grid>
            </Grid>
        </ButtonBase>
    )
}

function RightSideBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction={"row"}>
                <img src={"images/unknown.png"} alt="profile" style={{
                    width: "10%",
                    borderRadius: "50%",
                }}/>
                <Grid direction={"column"} container item className={classes.profText}>
                    <Typography className={classes.un}>User Name</Typography>
                    <Typography className={classes.uid}>user id</Typography>
                </Grid>
            </Grid>
            <Grid direction={"column"} item container className={classes.contributorsRoot}>
                <Typography className={classes.contributorTitle}>
                    Best Contributors
                </Typography>
                <Divider style={{
                    height: "2px",
                    width: "100%",
                    marginBottom:"1rem",
                }}/>
                {
                    conts.map(cont=><Contributor name={cont.name} id={cont.id} img={cont.img}/>)
                }
            </Grid>
        </div>
    )
}

export default RightSideBar;
