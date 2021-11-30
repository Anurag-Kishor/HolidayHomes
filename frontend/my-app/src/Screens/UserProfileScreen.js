import React from "react";
import {
  Col,
  Image,
  Navbar,
  Row,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";

import InputField from "../Components/InputField";

import { Link } from "react-router-dom";

import logo from "../assets/hhlogo.png";
import "../assets/css/main.css";
import userAvatarMale from "../assets/userAvatarMale.png";
import userTempProfPic from "../assets/userTempProfilePic.png";

import SearchBar from "material-ui-search-bar";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
const UserProfileScreen = () => {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <>
      <Row className="row__allow__gutter px-5">
        <Navbar>
          <Navbar.Brand href="#home">
            <Image src={logo} height="100" />
          </Navbar.Brand>
          <Col md={{ span: 6, offset: 1 }}>
            <SearchBar
              value={searchValue}
              onChange={(newValue) => setSearchValue(searchValue)}
              onRequestSearch={() => {}}
            />
          </Col>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text className="p-5 h5" style={{ color: "#ff6666" }}>
              Become a Host
            </Navbar.Text>
          </Navbar.Collapse>
          <Image src={userAvatarMale} height={50} />
        </Navbar>
      </Row>

      {/* My Rental Dashboard - Title */}
      <Row className="row__allow__gutter px-5 pt-3">
        <h4 style={{ textAlign: "left" }}>My Rental Dashboard</h4>
      </Row>

      {/* Welcome to Holiday Homes - Heading 2 */}
      <Row className="row__allow__gutter px-5 pt-3">
        <h5 style={{ textAlign: "left", color: "#B2B2B2" }}>
          Welcome to Holiday Homes
        </h5>
      </Row>

      {/* Cover Photo */}
      <Row
        className="row__allow__gutter cover-photo-user-profile px-5 py-5"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Col md={3} style={{ backgroundColor: "white", borderRadius: 15 }}>
          <Row className="row__allow__gutter px-5 py-4">
            <Col>
              <Image src={userTempProfPic} roundedCircle />{" "}
            </Col>
          </Row>
          <Row className="row__allow__gutter px-5">
            <Col md={12} className="apply__borders">
              <Row className="row__allow__gutter">
                <Col md={12}>
                  <h3>Profile</h3>
                </Col>
              </Row>
              <InputField label="Test" iconPlacement="left">
                <AddLocationAltRoundedIcon
                  sx={{
                    color: "action.active",
                    mr: 1,
                    my: 0.5,
                    fontSize: 30,
                  }}
                />
              </InputField>

              <Row>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AddLocationAltRoundedIcon
                    sx={{
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                      fontSize: 30,
                    }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Full Name"
                    variant="standard"
                    color="warning"
                    fullWidth
                  />
                </Box>
              </Row>
              <Row>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AddLocationAltRoundedIcon
                    sx={{
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                      fontSize: 30,
                    }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Full Name"
                    variant="standard"
                    color="warning"
                    fullWidth
                  />
                </Box>
              </Row>
              <Row>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AddLocationAltRoundedIcon
                    sx={{
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                      fontSize: 30,
                    }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Full Name"
                    variant="standard"
                    color="warning"
                    fullWidth
                  />
                </Box>
              </Row>
              <Row>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AddLocationAltRoundedIcon
                    sx={{
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                      fontSize: 30,
                    }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Full Name"
                    variant="standard"
                    color="warning"
                    fullWidth
                  />
                </Box>
              </Row>
              <Row>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AddLocationAltRoundedIcon
                    sx={{
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                      fontSize: 30,
                    }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Full Name"
                    variant="standard"
                    color="warning"
                    fullWidth
                  />
                </Box>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          md={8}
          style={{ backgroundColor: "white", borderRadius: 15 }}
        ></Col>
      </Row>
    </>
  );
};

export default UserProfileScreen;
