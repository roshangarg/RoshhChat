import { AppBar,  Grid, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// import TextField from "@material-ui/core/TextField";

// import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { useState } from "react";

import Messages from "./Messages";
import Input from "./input";

import Sidebar from "./Sidebar";
import { useContext } from "react";

import Chat from "../Context/Chat";


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

}));

export const Home = () => {
  const classes = useStyles();
 

 
  

  




  const isActive = useMediaQuery("(min-width: 600px)");
  return (
    <div className={classes.containerbar}>
      <Grid container spacing={0}>
        <Grid
          style={{
            // borderRight: "1px solid black",
            height: "100vh",
            // overflow:'scroll'

          }}
          item
          md={4}
          sm={4}
          xs={12}
        >
          <div>
            
            <Sidebar/>           
            
          </div>
        </Grid>

        {isActive && (
          <Grid item md={8} sm={8} xs={12}>
            <div >
              <Chat />
              <Messages />
              <Input />
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
