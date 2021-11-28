import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import "../assets/css/main.css";
import logo from "../assets/hhlogo.png";
import signInCover from "../assets/undraw_File_bundle_re_6q1e.png";

import TextField from "@mui/material/TextField";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";
import Box from "@mui/material/Box";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";

function SignupScreen() {
  return (
    <>
      <Row style={{ height: "98vh" }} className="row__allow__gutter">
        <Col sm={5} style={{ backgroundColor: "#E5E5E5" }}>
          <Row className="justify-content-md-center py-5 row__allow__gutter">
            <Col md={10} lg={10} sm={10}>
              <Container
                style={{ backgroundColor: "#e5e5e5", height: "88vh" }}
                className="p-5"
              >
                <Row className="mb-3 row__allow__gutter">
                  <Col md={{ span: 4, offset: 4 }}>
                    <Image src={logo} />
                  </Col>
                </Row>
                <Row
                  style={{
                    height: "10vh",
                    alignSelf: "stretch",
                    textAlign: "center",
                  }}
                  className="row__allow__gutter"
                >
                  <Col md={{ span: 4, offset: 4 }}>
                    <h2>Welcome</h2>
                  </Col>
                </Row>

                {/* Email */}
                <Row
                  style={{ height: "7vh" }}
                  className="mb-3 row__allow__gutter"
                >
                  <Col
                    md={12}
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
                </Row>

                {/* Password */}
                <Row
                  style={{ height: "7vh" }}
                  className="mb-3 row__allow__gutter"
                >
                  <Col
                    lg={12}
                    style={{ backgroundColor: "white", borderRadius: 10 }}
                  >
                    <Row className="h-100 d-flex flex-row align-items-center row__allow__gutter">
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

                {/* Remember Me - Forgot Password */}
                <Row
                  style={{
                    height: "5vh",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="mb-3 row__allow__gutter"
                >
                  <Col md={4}>
                    <FormControlLabel
                      control={<Checkbox color="error" />}
                      label="Remember Me"
                    />
                  </Col>
                  <Col
                    md={{ span: 4, offset: 4 }}
                    style={{ textAlign: "right" }}
                  >
                    Forgot Password?
                  </Col>
                </Row>

                {/* Login Button */}
                <Row className="mb-3 row__allow__gutter">
                  <Button
                    variant="primary"
                    size="lg"
                    style={{
                      backgroundColor: "#FF6666",
                      borderColor: "#ff6666",
                    }}
                  >
                    Login
                  </Button>
                </Row>

                {/* Register Link Button */}
                <Row
                  className="mb-3 row__allow__gutter"
                  style={{ alignSelf: "stretch", textAlign: "center" }}
                >
                  <Col>
                    Don't have an account?{" "}
                    <Link
                      to="../signup"
                      style={{ textDecoration: "none", color: "#ff6666" }}
                    >
                      Register{" "}
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Col>
        <Col sm={7}>
          <Row className="align-items-center h-100 row__allow__gutters">
            <Image src={signInCover} />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default SignupScreen;
