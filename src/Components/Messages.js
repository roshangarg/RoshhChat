import React from "react";
import { makeStyles } from "@material-ui/styles";
import Message from "./Message";

const useStyles = makeStyles((theme) => ({
        messages:{
          
            padding:'2rem',
            height:'359px',
            background:'#EEEDE7',
            overflow:'scroll'
            
           
            
            
        }
}))
const Messages = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.messages}>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
        );
}
 
export default Messages;