import {makeStyles} from '@material-ui/core/styles';
export default makeStyles((theme)=>({
    root:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
    },
    card:{
        padding:"10px",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor:"transparent",
    },
    div:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        position:"relative",
    },
    img:{
        height:"100px",
        width:"90%",
        color: '#fff',
        paddingLeft:'0',
        backgroundColor:'#14a31a',
        borderRadius:'25px',
        backgroundImage:'https://app.alvoraplay.com/assets/subgraphic-desktop-footer-left.png',
    },
    textbox:{
        position: "absolute",
        bottom:"5.0%",
        left: "6.00%",
        backgroundColor:'transparent',
        opacity:"0.8",
        color:"white",
        paddingLeft: "12px",
        paddingRight: "18px",
        width:"200px",
        borderRadius:'22px',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 0.5,
        color: '#fff',
      },
}))