/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState} from 'react'
import useStyles from './transactionStyles';
import {Card,Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';
import "../../styles/News.css"
import '../../styles/Transaction.css'
export const Transaction = () => { 
    const classes = useStyles();
    const trans = useSelector(state=>state);
    const wallet = trans.state.wallet.transactions; 
    console.log(wallet);
    const [uuid,setUid] = useState(null);
    const goTorns= () => {
        console.log("trans id is : ",uuid);
    }
        useEffect(()=>{
            goTorns();
            setUid(null);
        }, [trans] );
    return (
        <div id="Transaction">
            <div className="intro">
            <div className={classes.root}>
            
            { wallet ? wallet.map((n)=>
                <Card className={classes.card} onClick={()=>{setUid(n.uuid)}} key={n.uuid}>
                    <div className={classes.div}>
                    <img src="https://app.alvoraplay.com/assets/subgraphic-desktop-footer-left.png"alt="/" className={classes.img}></img>
                    <div className={classes.textbox}>
                        <Typography variant="h5" className={classes.head}>
                        ₹ {n.amount}
                            <br/>
                            {n.created_at}
                        </Typography>
                    </div>
                    </div>      
                </Card>
            )
            :
            <div>
          
          </div>
    }
            </div>
            </div>
         </div>
    )
}