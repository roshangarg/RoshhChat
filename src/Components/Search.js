import React, { useContext, useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import { auth } from "../Firebase/firebaseConfig";
import { AuthContext } from "../Context/AuthContext";
import { collection, query, where ,getDocs, setDoc, updateDoc, serverTimestamp, doc, getDoc} from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import {Avatar} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    
      search:{
        cursor:'pointer',
        "&:hover":{
          background:'blue',
          color:'white'
        }
      }
}))
const Search = () => {
    const [username ,setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [err, setError] = useState(false);
    const {currentUser} = useContext(AuthContext);


  const handleSearch = async () => {
    const q = query(collection(db, "users"), 
    where("displayName", "==", username));


    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      setUser(doc.data())
});
    }
    catch(err){
      setError(true)
    }
  }
  const handleKey = e => {
    e.code === "Enter" && handleSearch();
  }


  const handleSelect = async () => {
    // Check whether the group chats in firestore exits , if 
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
    try{
      const res = await getDoc(doc(db , "chats" ,combinedId));
      console.log("res",res)

      
      if(!res.exists()){
        console.log('inside :>> ');
        await setDoc(doc(db,"chats",combinedId),{messages:[]});

        



        await updateDoc(doc(db ,"userChats ", currentUser.uid
        ) , {
          [combinedId + ".userInfo"] :{
            uid: user.uid,
            displayName: user.displayName,
            photoURL : user.photoURL
          },
          [combinedId + ".date"]:serverTimestamp()
        });
       
        await updateDoc(doc(db,"userChats ",user.uid), {
          [combinedId + ".userInfo"] :{
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL : currentUser.photoURL
          },
          [combinedId + ".date"]:serverTimestamp()
        });
      
        
       
      }
     
      
    }
    
    catch(err) {
      setError(true)
      console.log(err)
    }
    setUser(null)
    setUsername('')
  }
  const classes = useStyles();
    return ( 
        <div>
            <TextField
              style={{ margin: "1rem", width: '400px' }}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKey}
              value={username}
              color='secondary'
              id="standard-search"
              label="Find a User "
              type="search"
            />
            {err&& <span>something went wrong </span>}
           { 
           user &&  <div onClick={handleSelect} className={classes.search}>
                <List >
                    <ListItem >
                      <ListItemAvatar>
                        <Avatar  src={user.photoURL} alt={user.displayNames}/>
                      </ListItemAvatar>
                      <ListItemText
                        
                        primary={user.displayName}
                       
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    </List>
                    <hr />
                  </div>
                 
            }
             
        </div>
        
     );
}
 
export default Search;