import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { PrimaryButton } from "../Components/CustomButton";
import {
  PrimaryTypographyGrid,
  SecondaryTypographyGrid,
} from "../Components/CustomGrid";

function Register() {
  const [input, setInput] = useState({
    username: "",
  });
  const [value, setValue] = React.useState(dayjs("2023-01-01"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleResetState = () => {
    input.username("");
  };

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
      <Grid container spacing={1}>
        <Typography textAlign="center" variant="h4" padding={3}>
          REGISTERA MÄTARSTÄLLNING
        </Typography>

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

      <Grid item xs={12} sm={12} md={12}>
        <PrimaryButton fullWidth>REGISTER</PrimaryButton>
      </Grid>

      <Grid item xs={12} sm={12} md={12} pt={1}>
        <Button variant="outlined" fullWidth>
          SKRIVA UT
        </Button>
      </Grid>
    </Box>
  );
}

export default Register;

/* 



    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 4, sm: 4, md: 12 }}
      p={2}
      
    >
      <Typography textAlign="center" variant="h4" padding={3}>
        REGISTERA MÄTARSTÄLLNING
      </Typography>

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
        <Typography>Mätarnummer</Typography>
      </Grid>
      <Grid item xs={4} sm={3} md={3}>
        <Typography>2</Typography>
      </Grid>
     //-----------------------------------------


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
    


      <Grid item xs={12} sm={12} md={12}>
        <PrimaryButton fullWidth
        >
          REGISTER
        </PrimaryButton>
      </Grid>

      <Grid item xs={12} sm={12} md={12} pt={1}>
        <Button variant="outlined" fullWidth>
          SKRIVA UT
        </Button>
      </Grid>
    </Grid>


*/
