import React, { useContext, useState,useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Message from "./Message";
import { ChatContext } from "../Context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase/firebaseConfig'
const high = 240;

const useStyles = makeStyles((theme) => ({
        messages:{
          
            padding:'2rem',
            height:'67.5vh',
            background:'#EEEDE7',
            overflow:'scroll'
            
        }
}))
const Messages = () => {
    const classes = useStyles()
    const [messages,setMessages] = useState([])
    const { data } = useContext(ChatContext)
    useEffect(() => {
      const unsub = onSnapshot(doc(db,'chats',data.chatId),(doc) => {
        doc.exists() && setMessages(doc.data().messages)
      })
    
      return () => {
        unsub()
      }
    }, [data.chatId])
    
    return ( 
        <div className={classes.messages}>
            {messages.map((m) => (
                 <Message message ={m} key={m.id}/>
            ))}
           
            
        </div>
        );
}
 
export default Messages;