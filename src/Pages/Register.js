import {  Grid, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { PrimaryButton, SecondaryButton } from "../Components/CustomButton";
import { useNavigate } from "react-router-dom";
import {
  FullGridElement,
  PrimaryTypographyGrid,
  SecondaryTypographyGrid,
  TitleTypography,
} from "../Components/CustomGrid";


function Register() {

  const navigate = useNavigate();

  const [value, setValue] = useState(dayjs("2023-01-01"));
  const [input, setInput] = useState({
    username: "",
  });

  const handleChangeState = (event) => {
    setInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container  rowSpacing={2} columnSpacing={{ xs: 12, sm: 4, md: 4 }}>
      <TitleTypography text="REGISTERA MÄTARSTÄLLNING " />

        <PrimaryTypographyGrid text="Anläggningsadress" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Kortnummer" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Namn" />
        <SecondaryTypographyGrid text="abc" />

        <PrimaryTypographyGrid text="Mätarnummer" />
        <SecondaryTypographyGrid text="abc" />

        <Grid item xs={7} sm={9} md={7} mt={5}>
          <Typography variant="string">Mätarställning</Typography>
          <TextField
            name="mätarställning"
            value={input.mätarställning}
            onChange={handleChangeState}
            autoFocus
            variant="outlined"
            margin="normal"
            fullWidth
            type={"text"}
            placeholder="t ex 1234@abcd"
          />
        </Grid>

        <Grid item xs={5} sm={3} md={5} mt={5}>
          <Typography variant="string">Avläsningsdatum</Typography>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack mt={2}>
              <DesktopDatePicker
                inputFormat="YYYY - MM - DD"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </Grid>
      </Grid>

      <FullGridElement item>
        <PrimaryButton fullWidth>REGISTER</PrimaryButton>
      </FullGridElement>
      <br/>
      <FullGridElement item>
        <SecondaryButton variant="outlined" fullWidth>
          SKRIVA UT
        </SecondaryButton>
      </FullGridElement>
    </Box>
  );
}

export default Register;
