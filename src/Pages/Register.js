import { Grid, TextField, Typography, Box } from "@mui/material";
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
  PrimaryTextField,
  PrimaryTypographyGrid,
  TitleTypography,
} from "../Components/CustomGrid";
import { useRecoilState } from "recoil";
import { globalState } from "../Components/RecoilState/GlobalState";

function Register() {

  const [value, setValue] = useState(dayjs("2023-01-01"));
  const [input, setInput] = useRecoilState(globalState);

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

  
  const navigate = useNavigate();
  const redirect = () => navigate("/receipt")

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={handleSubmit} >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 12, sm: 4, md: 4 }}>
          <TitleTypography text="REGISTERA MÄTARSTÄLLNING " />
          <PrimaryTypographyGrid text="Anläggningsadress" />
          <PrimaryTextField
            name="facilityAddress"
            value={input.facilityAddress}
            onChange={handleChangeState}
            autoFocus
            variant="outlined"
            margin="normal"
            type={"text"}
            text="abc"
          />

          <PrimaryTypographyGrid text="Kortnummer" />
          <PrimaryTextField
            name="cardNumber"
            value={input.cardNumber}
            onChange={handleChangeState}
            autoFocus
            variant="outlined"
            margin="normal"
            type={"text"}
            text="abc"
          />

          <PrimaryTypographyGrid text="Namn" />
          <PrimaryTextField
            name="name"
            value={input.name}
            onChange={handleChangeState}
            autoFocus
            variant="outlined"
            margin="normal"
            type={"text"}
            text="abc"
          />

          <PrimaryTypographyGrid text="Mätarnummer" />
          <PrimaryTextField
            name="meterNumber"
            value={input.meterNumber}
            onChange={handleChangeState}
            autoFocus
            variant="outlined"
            margin="normal"
            type={"text"}
            text="abc"
          />

          <Grid item xs={7} sm={9} md={7} mt={5}>
            <Typography variant="string">Mätarställning</Typography>
            <TextField
              name="meterSetting"
              value={input.meterSetting}
              onChange={handleChangeState}
              autoFocus
              variant="outlined"
              margin="normal"
              type={"text"}
              fullWidth
              placeholder="t ex 1234@abcd"
            />
          </Grid>

          <Grid item xs={5} sm={3} md={5} mt={5}>
            <Typography variant="string">Avläsningsdatum</Typography>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack mt={2}>
                <DesktopDatePicker
                  inputFormat="YYYY - MM - DD"
                  value={input.readingDate}
                  onChange={handleChangeState}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
        </Grid>

        <FullGridElement item>
          <PrimaryButton fullWidth type="submit" onClick={handleSubmit}  >REGISTER</PrimaryButton>
        </FullGridElement>
        <br />
        <FullGridElement item>
          <SecondaryButton variant="outlined" fullWidth onClick={redirect} >
            SKRIVA UT
          </SecondaryButton>
        </FullGridElement>
      </form>
    </Box>
  );
}

export default Register;

/*   const [input, setInput] = useRecoilState({
    facilityAddress: "",
    cardNumber: "",
    name: "",
    meterNumber: "",
    readingDate: "",
    meterSetting:"",
  }); */
