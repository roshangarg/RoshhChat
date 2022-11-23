
import { makeStyles, TextField, Typography, Button, } from "@material-ui/core";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../Firebase/firebaseConfig";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
const Login = () => {
    const classes = useStyle();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
        }
        catch (error) {
            setError(true)
            console.log( "log in failed" , error)

        }
    }



    return (
        <div className={classes.formContainer}>
            <div className={classes.formCard}>

                <Typography style={{ fontWeight: 'bold' }} variant='h5'>Roshan chat</Typography>
                <Typography variant='h6'> chat</Typography>

                <form onSubmit={handleSubmit} >


                    <TextField fullWidth id="email" onChange={(e) => setEmail(e.target.value)} type="email" label="Email" variant="outlined" /><br />
                    <br />
                    <TextField fullWidth id="password" onChange={(e) => setPassword(e.target.value)} type="Password" label="password" variant="outlined" /><br /><br />

                    <Button type="submit" style={{ background: 'black', color: 'white' }} fullWidth variant="contained">Sign in</Button><br />

                </form>

                <Typography style={{ marginTop: '1rem' }} variant='h6'>You don't have an Account ? <Link to="/signup">Register</Link> </Typography>

                {error && <span>Something Went wrong</span>}
            </div>
        </div>
    );
}

export default Login;