import Navbar from "./Navbar"
import * as React from 'react';
import "./sharedstyles.css"
import Grid from '@mui/material/Grid'; // Grid version 1



function App() {
  const styles = {
    grid:{
      margin:'0.5em'
    }
  };

  return (
  <body>
    <Grid style={styles.grid} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
    </Grid>
  </body>
 )
}

export default App;
