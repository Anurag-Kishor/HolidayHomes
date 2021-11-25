import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import "../assets/css/main.css";
import logo from "../assets/hhlogo.png";
import signUpCover from "../assets/undraw_Business_deal_re_up4u.png";

import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";
import HomeIcon from "@mui/icons-material/Home";
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
      <Row style={{ height: "100vh" }}>
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
                  <Col sm={11}>
                    <h2>Welcome</h2>
                  </Col>
                  <Col>
                    <Image src={logo} fluid />
                  </Col>
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
                          color="warning"
                          variant="standard"
                          fullWidth
                        />
                      </Box>
                    </Row>
                  </Col>
                  <Col lg={2}></Col>
                  <Col
                    lg={5}
                    style={{ backgroundColor: "white", borderRadius: 10 }}
                  >
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <PhoneIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Contact Number"
                          variant="standard"
                          color="warning"
                          fullWidth
                        />
                      </Box>
                    </Row>
                  </Col>
                </Row>

                {/* Email - Password */}
                <Row style={{ height: "7vh" }} className="mb-3">
                  <Col
                    lg={5}
                    style={{ backgroundColor: "white", borderRadius: 10 }}
                  >
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <AlternateEmailIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Email"
                          variant="standard"
                          color="warning"
                          fullWidth
                        />
                      </Box>
                    </Row>
                  </Col>
                  <Col lg={2}></Col>
                  <Col
                    lg={5}
                    style={{ backgroundColor: "white", borderRadius: 10 }}
                  >
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <PasswordIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Password"
                          variant="standard"
                          color="warning"
                          fullWidth
                        />
                      </Box>
                    </Row>
                  </Col>
                </Row>

                {/* Address - Line 1 */}
                <Row style={{ height: "7vh" }} className="mb-3">
                  <Col
                    lg={12}
                    style={{ backgroundColor: "white", borderRadius: 10 }}
                  >
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <HomeIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Address Line 1"
                          variant="standard"
                          color="warning"
                          fullWidth
                        />
                      </Box>
                    </Row>
                  </Col>
                </Row>

                {/* Address - Line 2 */}
                <Row style={{ height: "7vh" }} className="mb-3">
                  <Col
                    lg={12}
                    style={{ backgroundColor: "white", borderRadius: 10 }}
                  >
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <HomeIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Address Line 2"
                          variant="standard"
                          color="warning"
                          fullWidth
                        />
                      </Box>
                    </Row>
                  </Col>
                </Row>

                {/* Country - State - City */}
                <Row style={{ height: "8vh" }} className="mb-3">
                  <Col
                    lg={3}
                    style={{ backgroundColor: "white", borderRadius: 10 }}
                  >
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
                            color="warning"
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
                  <Col
                    lg={4}
                    style={{ backgroundColor: "white", borderRadius: 10 }}
                  >
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <FormControl fullWidth>
                          <InputLabel id="select-label-state" color="warning">
                            State
                          </InputLabel>
                          <Select
                            labelId="select-label-state"
                            id="input-with-sx"
                            value={state}
                            color="warning"
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
                  <Col
                    lg={3}
                    style={{ backgroundColor: "white", borderRadius: 10 }}
                  >
                    <Row className="h-100 d-flex flex-row align-items-center">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <FormControl fullWidth>
                          <InputLabel id="select-label-city" color="warning">
                            City
                          </InputLabel>
                          <Select
                            labelId="select-label-city"
                            id="input-with-sx"
                            value={city}
                            color="warning"
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
                    className="btn-secondary-hh"
                    // style={{ borderColor: "#ff6666", color: "#ff6666" }}
                  >
                    Login
                  </Button>
                </Row>
              </Container>
            </Col>
          </Row>
        </Col>
        <Col sm={5}>
          <Row className="align-items-center h-100">
            <Image src={signUpCover} />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default SignupScreen;
