import React, { useState } from "react";
import { Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import DatePicker from "./DatePicker";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RegisterInputs() {
  const [input, setInput] = useState({
    mätarställning: "",
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
      <Grid container spacing={1} columns={16}>
        <Grid xs={9}>
          <Typography variant="string">Mätarställning</Typography>
          <TextField
            name="mätarställning"
            value={input.mätarställning}
            onChange={handleChangeState}
            autoFocus
            variant="outlined"
            margin="normal"
            
            type={"text"}
          />
        </Grid>

        <Grid xs={6}>
          <DatePicker />
        </Grid>
      </Grid>
    </Box>
  );
}
