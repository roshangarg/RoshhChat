import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyle= makeStyles(theme => ({
    notFound:{
        display:'flex',
        width:'100%',
        height:'100vh',
        alignItems:'center',
        justifyContent:'center',
        background:'black',
        color:'red',
        

    }

}))
const NotFound = () => {
    const classes = useStyle();
    return ( 
        <div className={classes.notFound}>
            <Typography variant="h5"style={{marginRight:'2rem'}} > Opps! Page Not Found</Typography>
            <br />
            <Link to='/'>Go back to Home Page </Link>
        </div>
     );
}
 
export default NotFound;