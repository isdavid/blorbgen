import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';

function App() {
  return (
    <Grid container spacing={2} className="Grid">
      <Grid item xs={12} className="GridItem">
        <h1>Welcome to BLORBGEN</h1>
      </Grid>
    </Grid>
  );
}

export default App;
