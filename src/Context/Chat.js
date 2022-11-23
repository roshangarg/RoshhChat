import React, { useContext } from "react";
import { ChatContext } from "./ChatContext";
import { AppBar,  Grid, makeStyles, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CallSharpIcon from "@material-ui/icons/CallSharp";
import MoreHorizSharpIcon from "@material-ui/icons/MoreHorizSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
  
    },
  
    title: {
      flexGrow: 1,
    },
    containerbar: {
      // background:'#EEEDE7',
      height: '100vh',
      // overflow:'scroll'
  
    },
    userChats: {
      cursor: "pointer",
      "&:hover": {
        backgroundColor: " rgb(244 63 94)",
      },
  
    },
  }));

const Chat = () => {
    const {data} = useContext(ChatContext);
    const res = data
    
    const classes= useStyles()
    return ( 
        <div>
            <AppBar
                style={{ background: "black", color: "white" }}
                elevation={0}
                position="static"
              >
                <Toolbar style={{ gap: "1rem" }}>
                  <Typography className={classes.title}>
                   {res && res.user?.displayName}
                  </Typography>
                  <VideoCallSharpIcon className={classes.userChats} />
                  <CallSharpIcon className={classes.userChats} />
                  <MoreHorizSharpIcon className={classes.userChats} />
                </Toolbar>
              </AppBar>
        </div>
     );
}
 
export default Chat;