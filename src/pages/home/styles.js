import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  root: {
    backgroundColor: '#969696',
    flex: 1,
    minWidth:"55% !important",
    maxWidth:"55% !important",
  },
  header:{
    padding:"1.5rem",
    backgroundColor:"#d3d3d3",
    display: "flex",
  },
  Ht:{
    fontSize:"1.2rem",
    fontWeight:600,
    marginLeft:'0.5rem'
  },
  divider:{
    backgroundColor:'gray',
    filter:'opacity(0.9)',
    height:"2.5px",
    marginBottom:"1px",
  },
  Tweet:{
    padding:"1.5rem",
    backgroundColor:"#d3d3d3",
    display: "flex",
    flexDirection:"column",
  },
  input:{
    backgroundColor:"unset",
    marginLeft:"1rem",
    border:'solid gray 0.1px',
    outline:"none",
    flex:1,
    borderRadius:"5px",
    padding:"0.3rem",
    marginBottom:"0.5rem",
    "&:focus":{
      outline:'unset'
    },
    height:"4.5rem"
  },
  button:{
    backgroundColor:theme.palette.sec,
    borderRadius:"5px",
  }
}))

export default useStyles;