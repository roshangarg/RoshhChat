import Login from "./Components/Login";
import Register from './Components/Register'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
// import { createTheme,ThemeProvider } from "@material-ui/core";
import { Home } from "./Components/Home";
import NotFound from "./Components/NotFound";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext)

  const ProtectedRoutes = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/login" />
    }
    return children;
  };
  return (
    
      
      <BrowserRouter>
          <Routes  path="/">
            <Route index 
            element={
            <ProtectedRoutes>
              <Home/>
            </ProtectedRoutes>
          }/>
            <Route path="signup" element={<Register />}/>
            <Route path="login" element={<Login />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      
    
  );
}

export default App;
