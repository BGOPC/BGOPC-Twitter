import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    backgroundColor: "#b0b0b0",
  },
  mainPart: {
    backgroundColor: '#969696',
    flex: 1,
  },
  divider:{
    height: "100%",
    width: 1,
    backgroundColor: "#7EBAFF !important",
  }
})

export default useStyles;