import "./App.css";
import { Grid } from "@mui/material";
import Views from "./Components/Views";


function App(props) {
  


  return (
    <Grid container rowSpacing={1} p={2}
      style={{ display: "grid", height: "100vh", placeItems: "center" }}>
      <Grid item xs={12} sm={8} md={4} >
        <Views />
      </Grid>
    </Grid>
  );
}

export default App;
