import { Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../Components/CostumeButton";

function AfterRegister() {
  const print = () => {};

  return (
    <Grid p={2}>
      <Typography textAlign="center" variant="h4" padding={3}>
        REGISTERA MÄTARSTÄLLNING
      </Typography>

      <Box>
        <Grid item xs={12} pb={4}>
          Kvitto
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography>Anläggningsadress</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>2</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Kortnummer</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>4</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Namn</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>6</Typography>
          </Grid>

          <Grid item xs={6} pb={6}>
            <Typography>MätarNummer</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>8</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Mätarställning</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>10</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Avläsningsdatum</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>12</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Registreringsdatum</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>14</Typography>
          </Grid>

          <PrimaryButton sx={{ mt: 3, mb: 2 }} fullWidth type="submit">
            REGISTERA
          </PrimaryButton>
          <br />
          <SecondaryButton onClick={print} fullWidth>
            SKRIVA UT
          </SecondaryButton>
        </Grid>
      </Box>
    </Grid>
  );
}

export default AfterRegister;
