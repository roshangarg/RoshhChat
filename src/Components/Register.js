import { makeStyles, TextField, Typography, Button, } from "@material-ui/core";
import { Box } from "@material-ui/core";
import img from '../img/cam.png';

import React from "react";
const useStyle = makeStyles(
    {
        formContainer: {
            width: "100%",
            height: '100vh',
            display: 'flex',
            background: 'black',
            alignItems: 'center',
            justifyContent: 'center',

        },
        formCard: {
            display: 'flex',
            background: 'white',
            alignContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            
            borderRadius: '2%'
        }
    }
)
const Register = () => {
    const classes = useStyle();
    return (
        <div className={classes.formContainer}>
            <div className={classes.formCard}>

                <Typography style={{ fontWeight: 'bold' }} variant='h5'>Roshan chat</Typography>
                <Typography variant='h6'> chat</Typography>

                <form action="">
                    <Box style={{}}>
                        <TextField fullWidth id="text" type="text" label="Display Name" variant="standard" /><br />
                        <TextField fullWidth id="password" type="password" label="password" variant="standard" /><br />
                        <TextField fullWidth id="email" type="email" label="email" variant="standard" /><br />
                        <br />
                        <label style={{display:'flex',alignContent:'center',justifyContent:'center',alignItems:'center', gap:'1rem'}} htmlFor="file"> <img width='50px' src={img} alt="" />
                           <Typography  > add an avatar</Typography>
                        </label>
                        <TextField style={{ display: 'none' }} fullWidth id="file" type="file" label="file" variant="standard" /><br />
                        <Button style={{  background: 'black', color: 'white' }} fullWidth variant="contained">Sign Up</Button><br />
                    </Box>
                </form>

                <Typography style={{marginTop:'1rem'}} variant='h6'>You do have an Account ? Login</Typography>
            </div>
        </div>
    );
}

export default Register;