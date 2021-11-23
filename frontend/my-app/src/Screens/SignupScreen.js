import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";

function SignupScreen() {
  return (
    <>
      <Row style={{ height: "98vh" }}>
        <Col sm={7} style={{ backgroundColor: "red" }}>
          <Row className="justify-content-md-center py-5">
            <Col sm={10}>
              <Container
                style={{ backgroundColor: "blue", height: "88vh" }}
                className="p-5"
              >
                <Row style={{ backgroundColor: "green", height: "10vh" }}>
                  <Col sm={11}>Welcome</Col>
                  <Col>(Logo)</Col>
                </Row>
                <Row>
                  <Col
                    lg={5}
                    style={{ backgroundColor: "white" }}
                    className="p-2"
                  >
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
                  </Col>
                  <Col lg={2}></Col>
                  <Col lg={5}>
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
                  </Col>
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
