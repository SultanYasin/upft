import { Typography, Grid, Button } from "@mui/material";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../Components/CostumeButton";
import {
  FullTypographyGrid,
  PrimaryTypographyGrid,
  SecondaryTypographyGrid,
  TitleTypographyGrid,
} from "../Components/CostumeGrid";

export default function MultipleInvoice() {
  const print = () => {
    window.print();
  };

  return (
    <div className="invoice">
      <Grid container rowSpacing={0.5} columnSpacing={{ xs: 12, sm: 4, md: 4 }}>
   
        <TitleTypographyGrid text="TACK FÖR DIN REGISTERING!" />

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

        <Grid item xs={12} sm={12} md={12} mt={4}>
          <PrimaryButton fullWidth type="submit">
            REGISTER
          </PrimaryButton>
        </Grid>

        <Grid item xs={12} sm={12} md={12} pt={1}>
          <SecondaryButton variant="outlined" fullWidth onClick={print}>
            SKRIVA UT
          </SecondaryButton>
        </Grid>
      </Grid>
    </div>
  );
}
