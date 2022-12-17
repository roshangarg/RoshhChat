import React, { useContext, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from "@material-ui/core";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
const useStyles = makeStyles((theme) => ({
    
   //   Owner:{
   //    marginBottom:'1rem',
   //    display :'flex',
   //    gap:'2rem',
   //    alignItems:'center',
   //    flexDirection:"column"
     
   //    // position:'absolute'
   // },
   Message:{
      marginBottom:'0.5rem',
      display :'flex',
      gap:'2rem',
      alignItems:'center',
      
      // flexDirection:'row-reverse',
      // position:'absolute'
   },
   owner:{
      display:'flex',
      marginBottom:'0.5rem',
      gap:'2rem',
      alignItems:'center',
      flexDirection:'row-reverse'
   },
     messageinfo:{
        fontWeight:'300',
       
        color:'grey',
        display:'flex',
        flexDirection:'column'
        
     },
     messgaecontent:{
        maxWidth:'50%',
        display:'flex',
        flexDirection:'column',
        gap:'1rem'
     }
}))
const Message = ({message}) => {
   // console.log('message. :>> ', Object.entries(message.date).map(time => {
   //    console.log('time :>> ', time);
   // }));
   
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const ref = useRef()
    useEffect(() => {
     ref.current?.scrollIntoView({behavior:"smooth"})
    }, [message])
    return ( 
        <div ref={ref} className={`${classes.Message} ${message.senderId===currentUser.uid && classes.owner}`}>
            <div className={classes.messageinfo}>
            <Avatar alt="Remy Sharp" src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL } />
            {/* <Typography style={{ }} ></Typography> */}
            {/* {Object.entries(message.date).map(time => (
               <Typography style={{ }} >{time[0]}</Typography>
            )
                
               )} */}
            </div>
            
           <div className={classes.messgaecontent}>
            <Typography style={{background:'black' ,color:'white', padding:'0.4rem', borderRadius:'0 10px 10px',maxWidth:'max-Content' }} > {message.text} </Typography>
            {message.img &&<img src={message.img}  alt="" />}
            </div>
        </div>
     );
}
 
export default Message;
