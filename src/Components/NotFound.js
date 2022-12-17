import { makeStyles, Typography ,Box} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyle= makeStyles(theme => ({
    notFound:{
        display:'flex',
        width:'100%',
        height:'100vh',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
       
        color:'red',
    }

}))
const NotFound = () => {
    const classes = useStyle();
    return ( 
        <div className={classes.notFound}>
           <Box>
           <Typography variant="h5" > Opps! Page Not Found</Typography>
           
           </Box>
            <Box>
            <Link to='/'>Go back to Home Page </Link>
            </Box>
        </div>
     );
}
 
export default NotFound;