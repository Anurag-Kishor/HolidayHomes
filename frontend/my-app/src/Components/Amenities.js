import React, { useState } from "react";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import RateReviewIcon from "@mui/icons-material/RateReview";
import CreateIcon from "@mui/icons-material/Create";
import { Rating, Typography, Divider, Paper, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { Col, Image, Navbar, Row, Card, Container } from "react-bootstrap";

export default function Amenities(props) {
  const handleChange = (event) => {
    props.setSelectedFacilities((oldArray) => [...oldArray, event.target.id]);
  };
  return (
    <Row
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Col md={5}>
        <Row className="px-5 pt-5">
          <Paper elevation={5} style={{ padding: 10 }}>
            <Typography variant="h5" align="center" style={{ marginLeft: 30 }}>
              Facilities
            </Typography>

            <hr />
            <Paper
              variant="outlined"
              style={{
                padding: 20,
                borderColor: "#ff6666",
                marginBottom: 35,
              }}
            >
              <Row>
                <Col md={{ span: 6, offset: 5 }}>
                  {props.facilities.map((facility, index) => {
                    return (
                      <Row
                        key={facility.service_id}
                        className="h-10 d-flex flex-row align-items-center mx-3"
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={handleChange}
                              style={{
                                color: "#FF6666",
                              }}
                              id={facility.service_id}
                            />
                          }
                          label={facility.description}
                        />
                      </Row>
                    );
                  })}
                </Col>
              </Row>
            </Paper>
          </Paper>
        </Row>
      </Col>
      <Col md={5}>
        <Row className="px-5 pt-5">
          <Paper elevation={5} style={{ padding: 10 }}>
            <Typography variant="h5" align="center" style={{ marginLeft: 30 }}>
              House Rules
            </Typography>
            <hr />
            <Paper
              variant="outlined"
              style={{
                padding: 20,
                borderColor: "#ff6666",
                marginBottom: 35,
              }}
            >
              <Row>
                <Col md="6">
                  <Row className="h-10 d-flex flex-row align-items-center mx-3">
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          style={{
                            color: "#FF6666",
                          }}
                        /> //color change
                      }
                      label="No Smoking"
                    />
                  </Row>
                  <Row className="h-10 d-flex flex-row align-items-center mx-3">
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          style={{
                            color: "#FF6666",
                          }}
                        /> //color change
                      }
                      label="Pets Allowed"
                    />
                  </Row>
                </Col>

                <Col md="5">
                  <Row className="h-10 d-flex flex-row align-items-center mx-3">
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          style={{
                            color: "#FF6666",
                          }}
                        /> //color change
                      }
                      label="Check-in: After 9:00 AM"
                    />
                  </Row>
                  <Row className="h-10 d-flex flex-row align-items-center mx-3">
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          style={{
                            color: "#FF6666",
                          }}
                        /> //color change
                      }
                      label="Free Cancelation before 48 hours"
                    />
                  </Row>
                </Col>
              </Row>
            </Paper>
          </Paper>
          <hr />
        </Row>
      </Col>
    </Row>
  );
}
