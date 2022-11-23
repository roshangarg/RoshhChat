import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { makeStyles, TextField, Typography, Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import img from "../img/cam.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../Firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate ,Link} from "react-router-dom";
// import { Link } from "react-router-dom";

import React, { useState } from "react";

const useStyle = makeStyles({
  formContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    background: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  formCard: {
    display: "flex",
    background: '#EEEDE7',
    alignContent: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",

    borderRadius: "2%",
  },
});
const Register = () => {
  const classes = useStyle();
  const [displayName, setdisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState(false);
                                
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {

      const res = await createUserWithEmailAndPassword(auth, email, password);


      const storageRef = ref(storage,displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        
  (error) => {
    setError(true)
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL
      }); 


      await setDoc(doc(db, "users", res.user.uid), {
        displayName,
        email,
        photoURL: downloadURL,
        uid: res.user.uid,
      })
      
      await setDoc(doc(db,"userChats ",res.user.uid),{})
        .then(() => {
        navigate('/')
      })
     
    });
  }
);
    }
    catch (error) {
      setError(true)
    }
    
  }
  return (
    <div className={classes.formContainer}>
      <div className={classes.formCard}>
        <Typography style={{ fontWeight: "bold" }} variant="h5">
          Roshan chat
        </Typography>
        <Typography variant="h6"> chat</Typography>

        <form onSubmit={handleSubmit} action="">
          <Box style={{}}>
            <TextField
              color="primary"
              fullWidth
              value={displayName}
              onChange={(e) => setdisplayName(e.target.value)}
              id="text"
              type="text"
              label="Display Name"
              variant="outlined"
              required
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="password"
              type="password"
              label="password"
              variant="outlined"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="email"
              type="email"
              label="email"
              variant="outlined"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
              htmlFor="file"
            >
              {" "}
              <img width="50px" src={img} alt="hello" />
              <Typography> add an avatar</Typography>
            </label>
            <TextField
              style={{ display: "none" }}
              fullWidth
              id="file"
              type="file"
              label="file"
              variant="outlined"
              
              onChange={(e) => setFile(e.target.files[0])}

            />
            <br />
            <Button
              style={{ background: "black", color: "white" }}
              fullWidth
              variant="contained"
              type="submit"
            >
              Sign Up
            </Button>
            <br />
          </Box>
        </form>

        <Typography style={{ marginTop: "1rem" }} variant="h6">
          Do you have an account ? <Link to='/login' >Login</Link>
        </Typography>
        {error && <Typography> something went wrong</Typography>}
      </div>
    </div>
  );
};

export default Register;
