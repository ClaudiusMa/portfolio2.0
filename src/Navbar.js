import { textAlign } from '@mui/system';
import React from 'react'
import "./sharedstyles.css"
import Grid from '@mui/material/Grid'; // Grid version 1

export default function Navbar() {
    const styles = {
        nav:{
            textDecoration: 'none',
            textAlign:'left',
        },
        myname:{
            textAlign:'center',
            fontSize:"3rem",
            textDecoration: 'none'
        }
    };

    return (
    <div>
        <Grid item xs={12}>
            <a  className="font-face-old" style={styles.myname} href='https://www.linkedin.com/in/chuxuan-claudius-ma-875a43178/' target="_blank">Chuxuan Ma</a>
        </Grid>
       
        <nav style={styles.nav}>
            <Grid style={styles.nav} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    <a href="/story">My Story</a>
                </Grid>
                <Grid item xs={3}>
                    <a href="/ux">UX Design</a>
                </Grid>
                <Grid item xs={3}>
                    <a href="/industrial">Industrial Design</a>
                </Grid>
                <Grid item xs={2}>
                    <a href="/visual">Visual Design</a>
                </Grid>
            </Grid>
        </nav>
    </div>
    )
}
