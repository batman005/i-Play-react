import {makeStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';
export default makeStyles((theme)=>({
    root:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        backgroundColor:"#111",
    },
    card:{
        padding:"10px",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor:"#111",
    },
    div:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        position:"relative",
    },
    img:{
        height:"220px",
        width:"90%",
        color: '#fff',
        paddingLeft:'2rem',
    },
    textbox:{
        position: "absolute",
        bottom:"2%",
        left: "6.99%",
        backgroundColor:grey[900],
        opacity:"0.8",
        color:"white",
        paddingLeft: "12px",
        paddingRight: "18px",
        width:"200px",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 0.5,
        color: '#fff',
      },
}))