import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../Components/CustomButton";
import { FullGridElement } from "../Components/CustomGrid";

function Login() {

  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChangeState = (event) => {
    setInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.username === "Idata" && input.password === "123") {
      setAuthenticated(true);
      navigate("/list")
    } else {
      alert("Incorrect username or password");
    }
  };



  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
      <Typography textAlign="center" variant="h4" padding={3}>
        LOGGA IN TILL MÄTAREAVLÄSNING
      </Typography>

      <FullGridElement item paddingTop={3} paddingBottom={3}>
        <Typography textAlign="center" variant="string">
          Du hittar dina inlogningsuppgifter på din faktura
        </Typography>
      </FullGridElement>

      <Grid item mt={2}>
        <form onSubmit={handleSubmit}>
          <Typography variant="string" paddingTop={2}>
            Användarnamn
          </Typography>

          <TextField
            name="username"
            value={input.username}
            onChange={handleChangeState}
            autoFocus
            variant="outlined"
            margin="normal"
            fullWidth
            type={"text"}
          />

          <Typography variant="string" paddingTop={2}>
            Lösenord
          </Typography>

          <TextField
            name="password"
            value={input.password}
            onChange={handleChangeState}
            autoFocus
            variant="outlined"
            margin="normal"
            fullWidth
            type={"password"}
          />

          <PrimaryButton fullWidth>LOGGA IN</PrimaryButton>
        </form>
        <Typography textAlign="center" variant="string" paddingTop={3}>
          Denna sidan admminstreras av IDATA AB för ett antal företag och många
          svenska kommuner
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Login;
