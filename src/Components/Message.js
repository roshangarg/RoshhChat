import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
     Message:{
        marginBottom:'1rem',
        display :'flex',
        gap:'2rem',
        alignItems:'center',
        flexDirection:'row-reverse',
        // position:'absolute'
     },
     messageinfo:{
        fontWeight:'300',
       
        color:'grey',
        display:'flex',
        flexDirection:'column'
        
     },
     messgaecontent:{
        maxWidth:'80%',
        display:'flex',
        flexDirection:'column',
        gap:'1rem'

     }
}))
const Message = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.Message}>
            <div className={classes.messageinfo}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography style={{ }} >just now</Typography>
            </div>
            
           <div className={classes.messgaecontent}>
            <Typography style={{background:'black' ,color:'white', padding:'0.5rem', borderRadius:'0 10px 10px', }} > Hello hjhdhsgdhx isvsaee fffsdfdsf Roshan </Typography>
            <img src="" alt="" />
            </div>
        </div>
     );
}
 
export default Message;
