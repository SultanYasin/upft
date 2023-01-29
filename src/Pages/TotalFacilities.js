import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../Components/CustomButton";
import {
  FullGridElement,
  PrimaryTypographyGrid,
  SecondaryTypographyGrid,
  TitleTypography,
} from "../Components/CustomGrid";

export default function TotalFacilities() {

  const originalPrint = window.print;
  window.print = function() {
    document.getElementById("Buttons").style.display = "none";
    originalPrint();
  };
  const print = () => {
    window.print();
  };

  return (
    <div>
          <TitleTypography text="DINA ANLÄGGNINGAR " />
      <Card>
        <CardContent>
          <Grid
            container
            rowSpacing={0.5}
            columnSpacing={{ xs: 12, sm: 4, md: 4 }}
          >

            

            <PrimaryTypographyGrid text="Anläggningsadress" />
            <SecondaryTypographyGrid text="abc" />

            <PrimaryTypographyGrid text="Kortnummer" />
            <SecondaryTypographyGrid text="abc" />

            <PrimaryTypographyGrid text="Mätarställning" />
            <SecondaryTypographyGrid text="abc" />
          </Grid>
        </CardContent>
      </Card>
      <div style={{margin:"5vh 0 "}} id="Buttons" >
      <FullGridElement item>
        <PrimaryButton fullWidth type="submit">
          LOGGA UT
        </PrimaryButton>
      </FullGridElement>
    <br/>
      <FullGridElement item >
        <SecondaryButton variant="outlined" fullWidth onClick={print}>
          SKRIVA UT
        </SecondaryButton>
      </FullGridElement>
      </div>
    </div>
  );
}

/*

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

      <Card >
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
 */
