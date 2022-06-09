import React from "react";
import { AppBar, Container, Typography, Grow, Grid } from "@mui/material";
import carHubLogo from "../src/images/carhubLogo.png";
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2"> Car Hub</Typography>
        <img src={carHubLogo} alt="" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" spacing="3">
            <Grid item xs={12} sm={7}>
              <Cars />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
