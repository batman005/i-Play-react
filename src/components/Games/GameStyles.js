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
        width:"100%",
        borderRadius:"2%",
    },
    textbox:{
        position: "absolute",
        bottom:"1%",
        left: "0.59%",
        backgroundColor:'transparent',
        opacity:"0.8",
        color:"white",
        paddingLeft: "20px",
        paddingRight: "20px",
        marginBottom:"5px",
        borderRadius:"5px",
    },
    textbox1:{
        position: "absolute",
        bottom:"0%",
        left: "80.59%",
        backgroundColor:'transparent',
        opacity:"0.8",
        color:"white",
        paddingLeft: "20px",
        paddingRight: "20px",
        marginBottom:"5px",
        borderRadius:"5px",
    },
}))