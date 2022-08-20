import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#969696',
        flex: 1,
        minWidth: "55% !important",
        maxWidth: "55% !important",
    },
    header: {
        padding: "1.5rem",
        backgroundColor: "#d3d3d3",
        display: "flex",
    },
    Ht: {
        fontSize: "1.2rem",
        fontWeight: 600,
        marginLeft: '0.5rem'
    },
    divider: {
        backgroundColor: 'gray',
        filter: 'opacity(0.9)',
        height: "2.5px",
        marginBottom: "1px",
    },
    Tweet: {
        padding: "1.5rem",
        backgroundColor: "#d3d3d3",
        display: "flex",
        flexDirection: "column",
    },
    input: {
        backgroundColor: "unset",
        marginLeft: "1rem",
        border: 'solid gray 0.1px',
        outline: "none",
        flex: 1,
        borderRadius: "5px",
        padding: "0.3rem",
        marginBottom: "0.5rem",
        "&:focus": {
            outline: 'unset'
        },
        height: "4.5rem"
    },
    button: {
        backgroundColor: theme.palette.sec,
        borderRadius: "5px",
    },
    TweetMsg:{
        border:"solid 1px #3338 !important",
        borderRadius:"12px",
        padding:"0.25rem",
        height:"max-content",
        marginTop:"1rem",
        fontSize:"1rem",
        fontFamily:`${theme.typography.fontFamily} !important`,
        width:"75%",
        backgroundColor: "#d3d3d3",
        "&:focus": {
            outline: 'unset'
        },
    },
    Likebutton: {
        backgroundColor: `${theme.palette.sec} !important`,
        borderRadius: "50% !important",
        marginLeft: "1rem !important",
        marginTop: "unset",
        fontWeight: "lighter !important",
        fontSize: "large",
        padding: "15px",
        color: "unset !important",
    },
    TweetUserid: {
        color: `${theme.palette.text.hint} !important`,
        fontSize: "0.75rem",
        marginBottom:"0",
        paddingBottom:"0",
    },
    TweetUserInfo:{
        borderRadius:"15px",
        padding:"0.1rem 0.5rem",
        paddingBottom:"0.1rem !important"
    },
    TweetUsername:{
        fontSize: "0.9rem",
        marginRight:"1rem !important",
    },
    Upbutton: {
        backgroundColor: theme.palette.sec,
        borderRadius: "5px",
        marginRight: "1rem",
        width: "max-content"
    },

}))

export default useStyles;