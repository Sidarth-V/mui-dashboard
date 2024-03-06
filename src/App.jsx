import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dummy from "./components/Dummy/Dummy.component.jsx";
import ClippedDrawer from "./components/ClippedDrawer/ClippedDrawer.component.jsx";
import Dashboard from "./pages/Dashboard/dashboard.pages.jsx";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ClippedDrawer />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="alerting" element={<Dummy />} />
        <Route path="tracing" element={<Dummy />} />
        <Route path="sql" element={<Dummy />} />
        <Route path="baseline" element={<Dummy />} />
        <Route path="snapshots" element={<Dummy />} />
      </Route>
    )
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
