import { Grid } from "@mui/material";
import React from "react";

import { PrimaryButton, SecondaryButton } from "../Components/CustomButton";
import { FullGridElement, FullTypographyGrid, PrimaryTextField, PrimaryTypographyGrid, TitleTypography,} from "../Components/CustomGrid";


export default function MultipleInvoice() {
  const originalPrint = window.print;
  window.print = function() {
    document.getElementById("Buttons").style.display = "none";
    originalPrint();
    document.getElementById("Buttons").style.display = "block";
  };

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 4, md: 4 }}>
        <TitleTypography text="TACK FÖR DIN REGISTERING! " />

        <FullTypographyGrid text="Kvitto" />


        <PrimaryTypographyGrid text="Anläggningsadress" />
        <PrimaryTextField text={"facilityAddress"} />

        <PrimaryTypographyGrid text="Kortnummer" />
        <PrimaryTextField text={"cardNumber"} />

        <PrimaryTypographyGrid text="Namn" />
        <PrimaryTextField text={"name"} />

        <PrimaryTypographyGrid text="Mätarnummer" />
        <PrimaryTextField text={"meterNumber"} />

        <PrimaryTypographyGrid text="Mätarställning" />
        <PrimaryTextField text={"meterSetting"} />

        <PrimaryTypographyGrid text="Avläsningsdatum" />
        <PrimaryTextField text={"readingDate"} />

        <PrimaryTypographyGrid text="Registreringsdatum" />
        <PrimaryTextField text={"registerDate"} />
        <Grid item xs={12} sm={12} md={12}>
          <hr style={{ margin: "20px  15px 20px 0px" }} />
        </Grid>

        <PrimaryTypographyGrid text="Anläggningsadress" />
        <PrimaryTextField text="abc" />

        <PrimaryTypographyGrid text="Kortnummer" />
        <PrimaryTextField text="abc" />

        <PrimaryTypographyGrid text="Namn" />
        <PrimaryTextField text="abc" />

        <PrimaryTypographyGrid text="Mätarnummer" />
        <PrimaryTextField text="abc" />

        <PrimaryTypographyGrid text="Mätarställning" />
        <PrimaryTextField text="abc" />

        <PrimaryTypographyGrid text="Avläsningsdatum" />
        <PrimaryTextField text="abc" />

        <PrimaryTypographyGrid text="Registreringsdatum" />
        <PrimaryTextField text="abc" />
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
