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
  window.print = function () {
    document.getElementById("Buttons").style.display = "none";
    originalPrint();
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
      <div style={{ margin: "5vh 0 " }} id="Buttons">
        <FullGridElement item>
          <PrimaryButton fullWidth type="submit">
            LOGGA UT
          </PrimaryButton>
        </FullGridElement>
        <br />
        <FullGridElement item>
          <SecondaryButton
            variant="outlined"
            fullWidth
            onClick={() => window.print()}
          >
            SKRIVA UT
          </SecondaryButton>
        </FullGridElement>
      </div>
    </div>
  );
}
