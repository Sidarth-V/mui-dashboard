import "./App.css";
import NavContainer from "./components/NavContainer.component";
import { ThemeProvider } from "./context/ThemeProvider";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard.pages";
import Dummy from "./components/Dummy.component";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavContainer />}>
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
    <ThemeProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
