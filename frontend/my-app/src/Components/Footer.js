import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";
import React from "react";
import logo from "../assets/hhlogo.png";
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#E5E5E5",
        height: "250px",
        paddingTop: "100px",
      }}
    >
      <Grid container rowSpacing={1} spacing={5}>
        <Grid item xs={5}>
          <img src={logo} height="80" />
        </Grid>

        <Grid item xs={1}>
          <p style={{ fontWeight: "bold" }}> Become a host</p>
        </Grid>
        <Grid item xs={1}>
          <p style={{ fontWeight: "bold" }}> About us</p>
        </Grid>
        <Grid item xs={1}>
          <p style={{ fontWeight: "bold" }}> Carrers</p>
        </Grid>

        <Grid item xs={4}>
          <p>Holiday Homes. Inc.2019.Explore Places!</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
