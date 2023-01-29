import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, Link, RouterProvider, Routes,
} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Step2 from "./Pages/Step2";
import MultipleInvoice from "./Pages/MultipleInvoice";
import { Grid } from "@mui/material";

function App(props) {
  return (
    <Grid
    container
    rowSpacing={1}
    

    style={{ display: "grid",  height: "100vh",placeItems:"center" }} 
   >
      <Grid item xs={12} sm={4} md={4}  >

      <Step2 />
      </Grid>
    

      </Grid>
  
  );
}

export default App;
