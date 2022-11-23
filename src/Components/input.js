import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { AppBar } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { Toolbar } from "@material-ui/core";

import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { ChatContext } from "../Context/ChatContext";
import { AuthContext } from "../Context/AuthContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../Firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const useStyles = makeStyles((theme) => ({}));
const Input = () => {
 
  const [text, setText] = useState(null);
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [error, setError] = useState(false);

  const handleSend = async () => {
   
    try {
      if (img) {
        const storageRef = ref(storage, uuid());

        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
          (error) => {
            // setError(true)
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await updateDoc(doc(db, "chats", data.chatId), {
                  messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                    img: downloadURL,
                  }),
                });
              }
            );
          }
        );
      } else {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
      }
      await updateDoc(doc(db, "userChats ", currentUser.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
      await updateDoc(doc(db, "userChats ", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
    setText("");
    setImg(null);
    } catch (error) {
      setError(true);
      console.log(error);
    }

    
    
  };
  return (
    <div style={{ flexGrow: "1" }}>
      {error && <span>something went wronge</span>}
      <AppBar
        style={{ background: "#4C787E", color: "white" }}
        elevation={0}
        position="static"
      >
        <Toolbar style={{ gap: "1rem" }}>
          <TextField
            style={{ flexGrow: "1" }}
            color="secondary"
            onChange={(e) => setText(e.target.value)}
            id="standard-basic"
            placeholder="Message"
            value={text}
          />
          {/* <TextField style={{ display: 'none' }} id="file" type="file" label="file" variant="standard" />
        <label htmlFor="file"><CameraAltIcon /> </label> */}
          <TextField
            style={{ display: "none" }}
            onChange={(e) => setImg(e.target.files[0])}
            id="file"
            type="file"
            label="file"
            variant="standard"
          />
          <label htmlFor="file">
            {" "}
            <AttachFileIcon />
          </label>
          <Button
            endIcon={<SendIcon />}
            onClick={handleSend}
            variant="contained"
            color="secondary"
          >
            send
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Input;
