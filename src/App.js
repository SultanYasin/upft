import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, Link, RouterProvider, Routes,
} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Step2 from "./Pages/Step2";
import MultipleInvoice from "./Pages/MultipleInvoice";
import { Grid } from "@mui/material";
import TotalFacilities from "./Pages/TotalFacilities";


function App(props) {
  


  return (
    <Grid container rowSpacing={1} p={2}
      style={{ display: "grid", height: "100vh", placeItems: "center" }}>
      <Grid item xs={12} sm={8} md={6} >
        <TotalFacilities />
      </Grid>
    </Grid>
  );
}

export default App;
