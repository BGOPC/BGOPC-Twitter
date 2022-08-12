import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  root: {
    backgroundColor: '#7e7e7e',
    flex: 1,
    padding: '1rem 1.5rem',

  },
  divider:{
    height: "100%",
    width: 1,
    backgroundColor: "#7EBAFF !important",
  },
  profText:{
    marginLeft:"0.5rem",
    width: "max-content",
    borderRadius: "12px",
    backgroundColor: '#fdfdfd',
    padding: "1rem",
  },
  un:{
    flex:1,
  },
  uid:{
    flex:1,
    color:theme.palette.text.hint,
    fontSize:"1rem",
  },
  contributorsRoot:{
    // backgroundColor:"lightcyan",
    backgroundColor:"rgba(196,231,255,0.93)",
    borderRadius: "15px",
    padding:"1rem",
    margin:"2.5rem 0.5rem",
    border: "1.5px solid #00ffbf",
    width:"100%"
  },
  contributorTitle:{
    marginBottom: '0.65rem',
  },
  ContText:{
    flex:1,
    marginRight:"0.5rem",
    width: "max-content",
    borderRadius: "12px",
    backgroundColor: '#fdfdfd',
    padding: "1rem",
  }
}))

export default useStyles;