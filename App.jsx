import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./pages/theme";
import { Outlet } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Typography variant="h3">Header</Typography>
          <Outlet />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;



