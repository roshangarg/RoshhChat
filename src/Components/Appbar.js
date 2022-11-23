import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { AppBar, makeStyles } from "@material-ui/core";
import {Toolbar} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import {Button} from "@material-ui/core";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    
      },
    
      title: {
        flexGrow: 1,
      },
}))
const Appbar = () => {
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser)
    return ( 
        <div className={classes.root}>
              <AppBar
                style={{ background: "black", color: "white" }}
                elevation={0}
                position="static"
              >
                <Toolbar style={{ display: "flex" }}>
                  <Typography className={classes.title}>
                    CHAT APP
                  </Typography>
                  <Typography style={{ marginRight: "8px" }}>
                    {currentUser.displayName}
                  </Typography>
                  <Avatar src={currentUser.photoURL} alt="R" />

                  <Button
                    style={{ marginLeft: "1rem" }}
                    variant="contained"
                    color="secondary"
                    onClick={() => signOut(auth)}
                  >
                    Logout
                  </Button>
                </Toolbar>
              </AppBar>
            </div>
     );
}
 
export default Appbar;