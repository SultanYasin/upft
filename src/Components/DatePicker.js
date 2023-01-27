import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { Container } from "@mui/system";

export default function DatePicker() {
  const [value, setValue] = React.useState(dayjs("2023-01-01"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>

      <Typography variant="string" >
        Avläsningsdatum
      </Typography>

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
  );
}
