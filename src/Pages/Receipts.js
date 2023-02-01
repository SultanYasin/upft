import { Box, Grid } from "@mui/material";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../Components/CustomButton";
import {
  FullGridElement,
  FullTypographyGrid,
  PrimaryTypographyGrid,
  SecondaryTypographyGrid,
  TitleTypography,
} from "../Components/CustomGrid";

export default function MultipleInvoice() {
  const originalPrint = window.print;
  window.print = function() {
    document.getElementById("Buttons").style.display = "none";
    originalPrint();
  };

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 4, md: 4 }}>
        <TitleTypography text="TACK FÖR DIN REGISTERING! " />

        <FullTypographyGrid text="Kvitto" />

        <PrimaryTypographyGrid text="Anläggningsadress" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Kortnummer" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Namn" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Mätarnummer" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Mätarställning" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Avläsningsdatum" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Registreringsdatum" />
        <SecondaryTypographyGrid text="abc" />

        <Grid item xs={12} sm={12} md={12}>
          <hr style={{ margin: "20px  15px 20px 0px" }} />
        </Grid>

        <PrimaryTypographyGrid text="Anläggningsadress" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Kortnummer" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Namn" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Mätarnummer" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Mätarställning" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Avläsningsdatum" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Registreringsdatum" />
        <SecondaryTypographyGrid text="abc" />
      </Grid>

      <div style={{margin:"5vh 0 "}}  id="Buttons">
        <FullGridElement item>
          <PrimaryButton fullWidth type="submit">
            REGISTER
          </PrimaryButton>
        </FullGridElement>
        <br/>
        <FullGridElement item>
          <SecondaryButton variant="outlined" fullWidth onClick={() => window.print()}>
            SKRIVA UT
          </SecondaryButton>
        </FullGridElement>
      </div>
    </div>
  );
}