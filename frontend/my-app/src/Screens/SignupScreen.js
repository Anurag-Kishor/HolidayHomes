import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function SignupScreen() {
  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeState = (event) => {
    setState(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <Row style={{ height: "98vh" }}>
        <Col sm={7} style={{ backgroundColor: "#E5E5E5" }}>
          <Row className="justify-content-md-center py-5">
            <Col sm={10}>
              <Container
                style={{ backgroundColor: "#e5e5e5", height: "88vh" }}
                className="p-5"
              >
                <Row
                  style={{ height: "10vh" }}
                  className="d-flex flex-row mb-3 align-items-center"
                >
                  <Col sm={11}>Welcome</Col>
                  <Col>(Logo)</Col>
                </Row>
                {/* Full Name - Contact Number */}
                <Row style={{ height: "7vh" }} className="mb-3">
                  <Col
                    lg={5}
                    style={{ backgroundColor: "white", borderRadius: 10 }}
                  >
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <AccountCircle
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Full Name"
                          variant="standard"
                          fullWidth
                        />
                      </Box>
                    </Row>
                  </Col>
                  <Col lg={2}></Col>
                  <Col lg={5} style={{ backgroundColor: "white" }}>
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <PhoneIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Contact Number"
                          variant="standard"
                          fullWidth
                        />
                      </Box>
                    </Row>
                  </Col>
                </Row>

                {/* Email - Password */}
                <Row style={{ height: "7vh" }} className="mb-3">
                  <Col lg={5} style={{ backgroundColor: "white" }}>
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <AccountCircle
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Email"
                          variant="standard"
                          fullWidth
                        />
                      </Box>
                    </Row>
                  </Col>
                  <Col lg={2}></Col>
                  <Col lg={5} style={{ backgroundColor: "white" }}>
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <PhoneIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Password"
                          variant="standard"
                          fullWidth
                        />
                      </Box>
                    </Row>
                  </Col>
                </Row>

                {/* Address - Line 1 */}
                <Row style={{ height: "7vh" }} className="mb-3">
                  <Col lg={12} style={{ backgroundColor: "white" }}>
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <PhoneIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Address Line 1"
                          variant="standard"
                          fullWidth
                        />
                      </Box>
                    </Row>
                  </Col>
                </Row>

                {/* Address - Line 2 */}
                <Row style={{ height: "7vh" }} className="mb-3">
                  <Col lg={12} style={{ backgroundColor: "white" }}>
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <PhoneIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Address Line 2"
                          variant="standard"
                          fullWidth
                        />
                      </Box>
                    </Row>
                  </Col>
                </Row>

                {/* Country - State - City */}
                <Row style={{ height: "8vh" }} className="mb-3">
                  <Col lg={3} style={{ backgroundColor: "white" }}>
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AccountCircle
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <FormControl fullWidth>
                          <InputLabel id="select-label-country">
                            Country
                          </InputLabel>
                          <Select
                            labelId="select-label-country"
                            id="input-with-sx"
                            value={country}
                            label="Country"
                            onChange={handleChangeCountry}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Row>
                  </Col>
                  <Col lg={1}></Col>
                  <Col lg={4} style={{ backgroundColor: "white" }}>
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <FormControl fullWidth>
                          <InputLabel id="select-label-state">State</InputLabel>
                          <Select
                            labelId="select-label-state"
                            id="input-with-sx"
                            value={state}
                            label="State"
                            onChange={handleChangeState}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Row>
                  </Col>
                  <Col lg={1}></Col>
                  <Col lg={3} style={{ backgroundColor: "white" }}>
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <FormControl fullWidth>
                          <InputLabel id="select-label-city">City</InputLabel>
                          <Select
                            labelId="select-label-city"
                            id="input-with-sx"
                            value={city}
                            label="City"
                            onChange={handleChangeCity}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Row>
                  </Col>
                </Row>

                {/* Signup Button */}
                <Row className="mb-3">
                  <Button
                    variant="primary"
                    size="lg"
                    style={{
                      backgroundColor: "#FF6666",
                      borderColor: "#ff6666",
                    }}
                  >
                    Sign Up
                  </Button>
                </Row>

                {/* Login Button */}
                <Row className="mb-3">
                  <Button
                    variant="outline-primary"
                    size="lg"
                    style={{ borderColor: "#ff6666", color: "#ff6666" }}
                  >
                    Login
                  </Button>
                </Row>
              </Container>
            </Col>
          </Row>
        </Col>
        <Col sm={5}></Col>
      </Row>
    </>
  );
}

export default SignupScreen;
