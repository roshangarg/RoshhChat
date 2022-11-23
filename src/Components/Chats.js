import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import { db } from '../Firebase/firebaseConfig';
import { ChatContext } from "../Context/ChatContext";


 
const useStyles = makeStyles((theme) => ({
    userChats : {
        cursor: "pointer",
        "&:hover": {
          backgroundColor: " rgb(244 63 94)",
        },
    }
}))
const Chats = () => {
    const classes = useStyles();
    const [chats , setChats] = useState([])
    const { currentUser } = useContext(AuthContext)
    const { dispatch } = useContext(ChatContext); 
    useEffect(() => {
     const getChats =  () => {
      const unsub = onSnapshot(doc(db,"userChats ", currentUser.uid),(doc) => {
        setChats(doc.data());
      })
    
      return () => {
        unsub();
      }
     }
     currentUser.uid && getChats();
    }, [currentUser.uid])
   
    // console.log(Object.entries(chats));
    const handelSelect = (u) => {
      dispatch({type:'CHANGE_USER',payload: u})
    }
    

    return ( 
        <div>
           <div style={{ height: '60vh', overflow: 'scroll' }}>
              <List>
                {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
                     <div key={chat[0]} onClick={() => handelSelect(chat[1].userInfo)}>
                     <ListItem className={classes.userChats}>
                       <ListItemAvatar>
                         <Avatar src={chat[1].userInfo.photoURL}/>
                       </ListItemAvatar>
                       <ListItemText
                         color="white"
                         primary={chat[1].userInfo.displayName}
                         secondary={chat[1].lastMessage?.text}
                       />
                     </ListItem>
                     <Divider variant="inset" component="li" />
                   </div>
                ))}
                 
                  
              

              </List>
            </div>
          
        </div>
     );
}
 
export default Chats;