import React, { useState } from "react";

import * as regexValidations from "../features/Regex.js";

import { Container, Row, Col, Button, Image, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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

import { Link } from "react-router-dom";

import { loginUser } from "../app/Actions/userActions";

function SignupScreen() {
  const [errors, setErrors] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUpSubmit = async () => {
    if (
      !regexValidations.validEmail.test(email) ||
      !regexValidations.validPassword.test(password) ||
      !regexValidations.validPhoneNumber.test(contactNumber) ||
      fullName.length === 0 ||
      addressLine1.length === 0 ||
      addressLine2.length === 0 ||
      country.length === 0 ||
      state.length === 0 ||
      city.length === 0
    ) {
      setErrors(
        "There are some issues with the values inputted. Please try again."
      );
    } else {
      setErrors("");
      const user = {
        fullName,
        contactNumber,
        email,
        password,
        addressLine1,
        addressLine2,
        country,
        state,
        city,
      };

      await dispatch(loginUser(user));
      console.log("NAVIGATE BAKI HAI");
      navigate("/");
      console.log("NAVIGATE HOGAYA");
    }
  };

  return (
    <>
      <Row style={{ height: "100vh" }}>
        <Col sm={7} style={{ backgroundColor: "#E5E5E5" }}>
          {errors.length !== 0 ? (
            <Row className="pt-0 px-10">
              <Alert
                style={{
                  backgroundColor: "#ff6666",
                  color: "white",
                  borderColor: "#ff6666",
                }}
              >
                {errors}
              </Alert>
            </Row>
          ) : null}

          <Row className="justify-content-md-center py-5">
            <Col sm={10}>
              <Container
                style={{ backgroundColor: "#e5e5e5", height: "88vh" }}
                className="p-5"
              >
                <Row
                  style={{ height: "10vh" }}
                  className="d-flex flex-row mb-5 align-items-center"
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
                    <Row className="h-100 d-flex flex-row align-items-center px-4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <AccountCircle
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Full Name"
                          color="warning"
                          variant="standard"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
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
                    <Row className="h-100 d-flex flex-row align-items-center px-4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <PhoneIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Contact Number"
                          variant="standard"
                          color="warning"
                          value={contactNumber}
                          onChange={(e) => setContactNumber(e.target.value)}
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
                    <Row className="h-100 d-flex flex-row align-items-center px-4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <AlternateEmailIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Email"
                          variant="standard"
                          color="warning"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                    <Row className="h-100 d-flex flex-row align-items-center px-4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <PasswordIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Password"
                          variant="standard"
                          color="warning"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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
                    <Row className="h-100 d-flex flex-row align-items-center px-4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <HomeIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Address Line 1"
                          variant="standard"
                          color="warning"
                          value={addressLine1}
                          onChange={(e) => setAddressLine1(e.target.value)}
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
                    <Row className="h-100 d-flex flex-row align-items-center px-4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <HomeIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Address Line 2"
                          variant="standard"
                          color="warning"
                          value={addressLine2}
                          onChange={(e) => setAddressLine2(e.target.value)}
                          fullWidth
                        />
                      </Box>
                    </Row>
                  </Col>
                </Row>

                {/* Country - State - City */}
                <Row style={{ height: "8vh" }} className="mb-3">
                  <Col
                    md={4}
                    style={{ backgroundColor: "white", borderRadius: 10 }}
                  >
                    <Row className="h-100 d-flex flex-row align-items-center px-4">
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
                            onChange={(e) => setCountry(e.target.value)}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Row>
                  </Col>

                  <Col
                    md={4}
                    style={{ backgroundColor: "white", borderRadius: 10 }}
                  >
                    <Row className="h-100 d-flex flex-row align-items-center px-4">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AccountCircle
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
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
                            onChange={(e) => setState(e.target.value)}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Row>
                  </Col>

                  <Col
                    md={4}
                    style={{ backgroundColor: "white", borderRadius: 10 }}
                  >
                    <Row className="h-100 d-flex flex-row align-items-center px-4">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AccountCircle
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
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
                            onChange={(e) => setCity(e.target.value)}
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
                    onClick={signUpSubmit}
                  >
                    Sign Up
                  </Button>
                </Row>

                {/* Login Button */}
                <Row className="mb-3">
                  <Col md={12}>
                    <Link to="../signin" style={{ textDecoration: "none" }}>
                      <Button
                        variant="outline-primary"
                        size="lg"
                        className="btn-secondary-hh"
                        style={{ width: "100%", display: "block" }}
                      >
                        Login
                      </Button>
                    </Link>
                  </Col>
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
