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



export const FullTypographyGrid = ({ text }) => {
    return (
      <Grid item xs={12} sm={12} md={12}>
        <Typography>{ text }</Typography>
      </Grid>
    );
  };
export const TitleTypographyGrid = ({ text }) => {
    return (
      <Grid item xs={12} sm={12} md={12}>
        <Typography textAlign="center" variant="h4" pt={3} pb={3} >{ text }</Typography>
      </Grid>
    );
  };

