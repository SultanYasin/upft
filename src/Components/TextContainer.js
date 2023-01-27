import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function TextContainer() {
  return (
    <Container style={{alignItems: 'flex-start'}}>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#fff', height: '20vh' ,  }} >
            <p>Anläggningsaddress  some address </p>
            <p>koretnummer some number</p>
            <p>Namn </p>
            <p>Mätarnummer</p>
        </Box>
      </Container>
    </Container>
  );
}