import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../Components/CostumeButton";

function Login() {


   const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const handleChangeState = (event) => {
    setInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.username === 'Idata' && input.password === '123') {
      setAuthenticated(true);
    } else {
      alert('Incorrect username or password');
    }
  };

  if (authenticated) {
    return <h1>Welcome! You are now authenticated.</h1>;
  }

  if (authenticated) {
    return <h1>Welcome! You are now authenticated.</h1>;
  }

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
      <Typography textAlign="center" variant="h4" padding={3}>
        LOGGA IN TILL MÄTAREAVLÄSNING
      </Typography>

      <Grid item xs={12} sm={12} md={12} paddingTop={3} paddingBottom={3}>
        <Typography textAlign="center" variant="string">
          Du hittar dina inlogningsuppgifter på din faktura
        </Typography>
      </Grid>

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

          <PrimaryButton fullWidth >
            LOGGA IN
          </PrimaryButton>
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
