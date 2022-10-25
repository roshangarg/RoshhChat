import { AppBar, Avatar, Grid, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import CallSharpIcon from "@material-ui/icons/CallSharp";
import MoreHorizSharpIcon from "@material-ui/icons/MoreHorizSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import Messages from "./Messages";
import Input from "./input";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  containerbar: {
    // background:'#EEEDE7',
      height:'100vh',
    // overflow:'scroll'
    
  },
  userChats: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: " rgb(244 63 94)",
    },
    
  },
}));

export const Home = () => {
  const classes = useStyles();
  const userchats = [
    {
      name: 'Roshan',
      lastmsg: 'hello',
    }, {
      name: 'Rohit',
      lastmsg: 'hello',
    }, {
      name: 'Rahul',
      lastmsg: 'hello',
    }, {
      name: 'Roshan',
      lastmsg: 'hello',
    }, {
      name: 'Rohit',
      lastmsg: 'hello',
    }, {
      name: 'Rahul',
      lastmsg: 'hello',
    },
    {
      name: 'Rahul',
      lastmsg: 'hello',
    }, {
      name: 'Roshan',
      lastmsg: 'hello',
    }, {
      name: 'Rohit',
      lastmsg: 'hello',
    }, {
      name: 'Rahul',
      lastmsg: 'hello',
    }
  ]



  const isActive = useMediaQuery("(min-width: 600px)");
  return (
    <div className={classes.containerbar}>
      <Grid container spacing={0}>
        <Grid
          style={{
            borderRight: "1px solid black",
            height: "100vh",
            overflow:'scroll'
           
          }}
          item
          md={4}
          sm={4}
          xs={12}
        >
          <div>
            <div className={classes.root}>
              <AppBar
                style={{ background: "black", color: "white" }}
                elevation={0}
                position="static"
              >
                <Toolbar style={{ display: "flex" }}>
                  <Typography variant="p" className={classes.title}>
                    CHAT APP
                  </Typography>
                  <Typography variant="p" style={{ marginRight: "8px" }}>
                    Roshan Garg
                  </Typography>
                  <Avatar src="image.png" />

                  <Button
                    style={{ marginLeft: "1rem" }}
                    variant="contained"
                    color="secondary"
                  >
                    Logout
                  </Button>
                </Toolbar>
              </AppBar>
            </div>
            <TextField
              style={{ margin: "1rem" , width:'400px'}}
              // fullWidth
              color='secondary'
              id="standard-search"
              label="Find a User "
              type="search"
            />
            <div style={{height:'calc(100vh - 120px)'}}>
              <List>
                {userchats.map(item => (
                  <div>
                    <ListItem className={classes.userChats}>
                      <ListItemAvatar>
                        <Avatar src="" />
                      </ListItemAvatar>
                      <ListItemText
                        color="white"
                        primary={item.name}
                        secondary={item.lastmsg}
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </div>
                ))}

              </List>
            </div>
          </div>
        </Grid>

        {isActive && (
          <Grid item md={8} sm={8} xs={12}>
            <div style={{height:'100vh'}}>
              <AppBar
                style={{ background: "black", color: "white" }}
                elevation={0}
                position="static"
              >
                <Toolbar style={{ gap: "1rem" }}>
                  <Typography variant="p" className={classes.title}>
                    Roshan
                  </Typography>
                  <VideoCallSharpIcon className={classes.userChats} />
                  <CallSharpIcon className={classes.userChats} />
                  <MoreHorizSharpIcon className={classes.userChats} />
                </Toolbar>
              </AppBar>
              <Messages />
              <Input />
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
