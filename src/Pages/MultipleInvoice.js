import { Typography, Grid, Button, Box } from "@mui/material";
import React from "react";

export default function MultipleInvoice() {

  const print = () =>{
    window.print()


  }

  return (
    <div className="invoice">
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 12, sm: 4, md: 4 }}
         >
      <Typography textAlign="center" variant="h4" padding={3}>
        TACK FÖR DIN REGISTERING!
      </Typography>

      <Grid item xs={12} sm={12} md={12} pb={3}>
        Kvitto
      </Grid>

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
        <Typography>Namn</Typography>
      </Grid>
      <Grid item xs={4} sm={3} md={3}>
        <Typography>2</Typography>
      </Grid>
      <Grid item xs={8} sm={9} md={9}>
        <Typography>MätarNummer</Typography>
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
      <Grid item xs={8} sm={9} md={9}>
        <Typography>Avläsningsdatum</Typography>
      </Grid>
      <Grid item xs={4} sm={3} md={3}>
        <Typography>2</Typography>
      </Grid>
      <Grid item xs={8} sm={9} md={9}>
        <Typography>Registreringsdatum</Typography>
      </Grid>
      <Grid item xs={4} sm={3} md={3}>
        <Typography>2</Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
      <hr style={{ margin: "35px  15px 35px 0px" }} />
      </Grid>


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
        <Typography>Namn</Typography>
      </Grid>
      <Grid item xs={4} sm={3} md={3}>
        <Typography>2</Typography>
      </Grid>
      <Grid item xs={8} sm={9} md={9}>
        <Typography>MätarNummer</Typography>
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
      <Grid item xs={8} sm={9} md={9}>
        <Typography>Avläsningsdatum</Typography>
      </Grid>
      <Grid item xs={4} sm={3} md={3}>
        <Typography>2</Typography>
      </Grid>
      <Grid item xs={8} sm={9} md={9}>
        <Typography>Registreringsdatum</Typography>
      </Grid>
      <Grid item xs={4} sm={3} md={3}  >
        <Typography>2</Typography>
      </Grid>

      
        <Grid item xs={12} sm={12} md={12} mt={5}>
          <Button
           variant="contained" 
           fullWidth
           type="submit"
           
           >
            REGISTER
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} md={12} pt={1}>
          <Button variant="outlined" fullWidth onClick={print}>
            SKRIVA UT
          </Button>
        </Grid>
        </Grid>
    
    </div>
  );
}
