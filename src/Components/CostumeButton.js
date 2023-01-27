import { Button } from '@mui/material'
import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";



function CostumeButton() {


  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00364c",
        color:'#fff',
        variant:"contained"
      },
      secondary: {
        main: "#fff",
        color:'#00364c',
        borderRadius:'2px',
        variant:"outlined"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button variant="contained" color="primary">
          REGESTERA
        </Button>
        <Button variant="contained" color="secondary">
          AVBRYT
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default CostumeButton