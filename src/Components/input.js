import React from "react";
import { makeStyles } from "@material-ui/styles";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { AppBar } from "@material-ui/core";
// import { Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";

// import img from '../img/cam.png';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
const useStyles = makeStyles((theme) => ({
 
}));
const Input = () => {
  // const classes = useStyles();
  return (
    
    <div style={{flexGrow:'1'}}>
    <AppBar
      style={{  background: "#4C787E" , color:'white'  }}
      elevation={0}
      position="static"
    >
      <Toolbar style={{ gap: "1rem" }}>
       
        <TextField  style={{flexGrow:'1'}}   id="standard-basic" placeholder="Message" />
        <TextField style={{ display: 'none' }} id="file" type="file" label="file" variant="standard" />
        <label htmlFor="file"><CameraAltIcon /> </label>
        <TextField style={{ display: 'none' }} id="file" type="file" label="file" variant="standard" />
        <label htmlFor="file"> <AttachFileIcon /></label>
        <Button
          endIcon={<SendIcon />}
          variant="contained" color="secondary">
          send
        </Button>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Input;
