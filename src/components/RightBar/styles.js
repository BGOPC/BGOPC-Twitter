import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme=>({
  root:{
    backgroundColor: '#424242',
    minWidth:"20% !important",
    maxWidth:"20% !important",
    padding: '1.5rem 1rem'
  },
  logo:{
    fontSize: '2rem',
    fontWeight: 600,
    marginRight: '1rem',
    marginBottom: '1rem',
    color: theme.palette.main
  },
  hashtags:{
    backgroundColor:"#5e5e5e",
    borderRadius:"15px",
    paddingLeft:"0.5rem ",
    paddingTop:"0.1rem ",
    marginTop:"1rem ",

  },
  HashTagTop:{
    alignSelf:"center",
    alignItems:"center",
    alignContent:"center",
    fontSize: '1.25rem',
    color:theme.palette.sec,
    padding: "0 1.5rem",
    fontWeight: 600,
    marginTop:  '.5rem',
    marginBottom: '1.5rem'
  },
  hashtagImg:{
    borderRadius: "15%",
  },
  hashtag:{
    color: theme.palette.sec,
    marginRight: '0.8rem',
    paddingTop:"1.6rem",
    lineHeight:"0.3rem !important"
  },
  hashtagParent:{
    width:"100%",
    marginBottom: '0.5rem',
    marginRight: '0.5rem',
    padding:"0.15rem !important",
  },
}))

export default useStyles;