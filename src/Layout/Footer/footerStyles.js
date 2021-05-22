import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    root:{
        flexGrow:1,
    },
    appbar:{
        top:"auto",
        bottom:0,
        display:"fixed",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#4caf50',
        backgroundColor:'black',
        transitionDuration:'.5s',
      },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
      },
    grid:{
        display:"flex",
        justifyContent:"center",
    },
    buttonSuccess:{
        flexDirection:"column",
        paddingBottom: "5px!important",
        height: "50px!important",
        color: "#1edc26!important",
    }
}))