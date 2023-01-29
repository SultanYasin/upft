import React, { Children } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const PrimaryTypographyGrid = ({ text }) => {
  return (
    <Grid item xs={8} sm={8} md={9}>
      <Typography>{text}</Typography>
    </Grid>
  );
};

export const SecondaryTypographyGrid = ({ text }) => {
  return (
    <Grid item xs={4} sm={4} md={3}>
      <Typography>{text}</Typography>
    </Grid>
  );
};

export const FullTypographyGrid = ({ text }) => {
  return (
    <Grid item xs={12} sm={12} md={12}>
      <Typography>{text}</Typography>
    </Grid>
  );
};
export const FullGridElement = ({ children, xs, sm, md, pt }) => (
  <Grid item xs={12} sm={12} md={12} pt={2}>
    {children}
  </Grid>
);

export const TitleTypography = ({ text }) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      style={{ display: "flex", textAlign: "center" }}
    >
      <Typography variant="h4" pt={5} pb={5}>
        {text}
      </Typography>
    </Grid>
  );
};