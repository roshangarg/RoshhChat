import Login from "./Components/Login";

import { createTheme,ThemeProvider } from "@material-ui/core";
import { Home } from "./Components/Home";
const theme = createTheme({
  palette:{
    primary:{
      main: '#fefefe'
    },
    
  },
  
})
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;
