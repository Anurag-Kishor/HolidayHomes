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

export default function Amenities() {
  const [amenities, setAmenities] = useState({});

  const handleChange = (event) => {
    setAmenities({
      ...amenities,
      [event.target.id]: event.target.checked,
    });
  };

  return (
    <Row
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
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
                <Col md="6">
                  <Row className="h-10 d-flex flex-row align-items-center mx-3">
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          style={{
                            color: "#FF6666",
                          }}
                        />
                      }
                      label="Parking"
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
                      label="Balcony"
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
                      label="Swimming Pool"
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
                      label="Game Zone"
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
                      label="Cafe"
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
                      label="Garden"
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
                      label="Air Conditioner"
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
                      label="Gymnasium"
                    />
                  </Row>
                </Col>
              </Row>
            </Paper>
            <Col>
              <Typography
                variant="h5"
                align="center"
                style={{ marginLeft: 30 }}
              >
                Others
              </Typography>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <CreateIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="eg:- No Drinking;outside food not allowed"
                  variant="standard"
                  color="warning"
                  fullWidth
                />
              </Box>
            </Col>
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
            <Col>
              <Typography
                variant="h5"
                align="center"
                style={{ marginLeft: 30 }}
              >
                Others
              </Typography>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <CreateIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="eg:- No Drinking;outside food not allowed"
                  variant="standard"
                  color="warning"
                  fullWidth
                />
              </Box>
            </Col>
            {/* Add Others Fieled */}
          </Paper>
          <hr />
        </Row>
      </Col>
    </Row>
  );
}
