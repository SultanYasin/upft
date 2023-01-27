import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Typography, Box, Grid } from "@mui/material";


function Inloggning() {
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
    console.log(input);
  };

  return (
    <Grid
    container
    rowSpacing={1}
    columnSpacing={{ xs: 4, sm: 4, md: 4 }}
    style={{ margin: "auto ", maxWidth: "600px" }}
  >
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography textAlign="center" variant="h4" padding={3}>
          LOGGA IN TILL MÄTAREAVLÄSNING
        </Typography>

        <Typography textAlign="center" variant="string" paddingTop={1}>
          Du hittar dina inlogningsuppgifter på din faktura
        </Typography>

        <div
          style={{ display: "flex", flexDirection: "column", width: "800px" }}
        >
          <Typography variant="string" paddingTop={2} paddingRight={10}>
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

          <Typography variant="string" paddingTop={2} paddingRight={10}>
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
        </div>

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          LOGGA IN
        </Button>

        <Typography textAlign="center" variant="string" padding={3}>
          Denna sidan admminstreras av IDATA AB för ett antal företag och många
          svenska kommuner
        </Typography>
      </Box>
    </form>
    </Grid>
  );
}

export default Inloggning;
