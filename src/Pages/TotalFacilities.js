import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";


function TotalFacilities() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const print = () => {
    window.print();
  };

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 4, sm: 4, md: 4 }}
      style={{ margin: "auto 10vw", maxWidth: "600px" }}
    >
      <Typography textAlign="center" variant="h4" padding={3}>
        DINA ANLÄGNINGAR
      </Typography>

      <Card style={{ width: "600px" }}>
        <CardContent style={{margin:" 10px 20px"}} >
          <Grid container>
            
            <Grid item xs={8} sm={9} md={9}>
              <Typography>Anläggningsadress</Typography>
            </Grid>
            <Grid item xs={4} sm={3} md={3}>
              <Typography>2</Typography>
            </Grid>
            <Grid item xs={8} sm={9} md={9}>
              <Typography>Kortnummer</Typography>
            </Grid>
            <Grid item xs={4} sm={3} md={3}>
              <Typography>2</Typography>
            </Grid>
            <Grid item xs={8} sm={9} md={9}>
              <Typography>Mätarställning</Typography>
            </Grid>
            <Grid item xs={4} sm={3} md={3}>
              <Typography>2</Typography>
            </Grid>
            
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={1}  marginLeft={3} >
        <Grid item xs={11} sm={12} md={12}>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 5, mb: 1 }}
          >
            REGISTER
          </Button>
        </Grid>

        <Grid item xs={11} sm={12} md={12} pt={1}>
          <Button variant="outlined" fullWidth onClick={print}>
            SKRIVA UT
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TotalFacilities;
