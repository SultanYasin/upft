import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const PrimaryTypographyGrid = ({ text }) => {
  return (
    <Grid item xs={8} sm={8} md={9}>
      <Typography>{ text }</Typography>
    </Grid>
  );
};


export const SecondaryTypographyGrid = ({ text }) => {
    return (
      <Grid item xs={4} sm={4} md={3}>
        <Typography>{ text }</Typography>
      </Grid>
    );
  };

