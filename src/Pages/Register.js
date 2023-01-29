import { Button, Grid, TextField, Typography } from "@mui/material";

import React, { useState } from "react";

import dayjs from "dayjs";
import Stack from "@mui/material/Stack";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 4, sm: 4, md: 4 }}
      
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
      {/* -------------------------------- */}

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
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{ mt: 5, mb: 1 }}
        >
          REGISTER
        </Button>
      </Grid>

      <Grid item xs={12} sm={12} md={12} pt={1}>
        <Button variant="outlined" fullWidth>
          AVBRYT
        </Button>
      </Grid>
    </Grid>
  );
}

export default Register;

/* 
  <Grid container spacing={1} alignItems="start">
            <Grid item xs={8}>
              <Typography>name</Typography>
              <TextField
                onChange={handleChangeState}
                name="name"
                type={"text"}
                value={input.name}
                variant="outlined"
                placeholder="Name :"
                fullWidth
                margin="normal"
              />
            </Grid>

            <Grid item xs={4}>
            <RegisterInputs />
             
            </Grid>
          </Grid>



 <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        maxWidth: "800px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography textAlign="center" variant="h4" padding={3}>
          REGISTERA MÄTAREAVLÄSNING
        </Typography>

        <TextContainer />
        
        <RegisterInputs />


      </form>
    </Box>

    -----------------------------------------------
      <form onSubmit={handleSubmit}>
      <Box className={styles.BoxStyle}>
        <Typography textAlign="center" variant="h4" padding={3}>
          REGISTERA MÄTARSTÄLLNING
        </Typography>

        <Box sx={{ width: '100%',  }}>

        <Grid item xs={12} pb={4} >Kvitto</Grid>
        
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


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

        <Grid item xs={6} pb={6} >
          <Typography>MätarNummer</Typography>
        </Grid>


      </Grid>
    </Box>

        <Box mt={5} sx={{ flexGrow: 1}}>
        <RegisterInputs />
        </Box>

        <Button
          type="submit"
          sx={{ mt: 3, mb: 2 }}
          fullWidth
          variant="contained"
        >
          REGISTERA
        </Button>
        <br />
        <Button onClick={handleResetState} variant="outlined" fullWidth>
          AVBRYT
        </Button>

      
        
      </Box>
    </form>
*/
