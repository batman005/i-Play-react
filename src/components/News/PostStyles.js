import {makeStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';

export default makeStyles((theme)=>({
    root:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
    },
    card:{
        padding:"10px",
        height:"100vh",
        overflowY:"scroll",
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
        height:"250px",
        width:"90%",
        borderRadius:"1%",
    },
    textbox:{
        position: "absolute",
        bottom:"0%",
        left: "9.99%",
        backgroundColor:grey[700],
        opacity:"0.8",
        color:"white",
        paddingLeft: "20px",
        paddingRight: "20px",
        marginBottom:"5px",
        borderRadius:"5px",
        width:'200px',
    },
    head:{
        marginLeft:'1vh',
    },
    date:{
        marginLeft:'1vh',
        color:'green',
    },
    news:{
       marginLeft:'1vh',
    },

}))