import React from "react";
import { Typography, Grid } from "@material-ui/core";

const DonatePage = () => {
  return (
    <Grid     
      style={{ height: "80vh" }}
      container
      direction="column"
      justify="space-around"
      alignItems="center">
        <div className="form-section-music">
          <Typography variant="h5" gutterBottom={true}>
            The current page has been changed to the HelpsApp page, click <a href="/about/heplp">here</a> to continue{" "}
          </Typography>
        </div>
         
      </Grid>
  );
};

export default DonatePage;
