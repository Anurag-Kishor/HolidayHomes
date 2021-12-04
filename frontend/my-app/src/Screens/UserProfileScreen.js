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

import resortPhoto from "../assets/pixabay_maldives-1200.jpg";

import InputField from "../Components/InputField";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import HomeIcon from "@mui/icons-material/Home";

import { Link } from "react-router-dom";

import logo from "../assets/hhlogo.png";
import "../assets/css/main.css";
import userAvatarMale from "../assets/userAvatarMale.png";
import userTempProfPic from "../assets/userTempProfilePic.png";

import SearchBar from "material-ui-search-bar";
import { Box } from "@mui/system";
import { Divider, List, ListItem, TextField, Typography } from "@mui/material";
import UserBooking from "../Components/UserBooking";
const UserProfileScreen = () => {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <>
      <Container fluid="md">
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
        <Row
          className="row__allow__gutter px-5 pb-3"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col md={12}>
            <h5 style={{ textAlign: "left", color: "#B2B2B2" }}>
              Welcome to Holiday Homes
            </h5>
          </Col>
        </Row>
      </Container>

      {/* Cover Photo */}
      <Row
        className="row__allow__gutter cover-photo-user-profile px-5 py-5"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Col
          md={{ span: 3, offset: 1 }}
          style={{ backgroundColor: "white", borderRadius: 15 }}
        >
          <Row className="row__allow__gutter px-5 py-4">
            <Col>
              <Image src={userTempProfPic} roundedCircle />{" "}
            </Col>
          </Row>
          <Row className="row__allow__gutter px-5">
            <Col md={12} className="apply__borders">
              <Row className="row__allow__gutter">
                <Col md={12}>
                  <h2 style={{ color: "#ff6666" }}>Profile</h2>
                </Col>
              </Row>
              <Row className="mb-2">
                <InputField label="Full Name" iconPlacement="left">
                  <BadgeIcon
                    sx={{
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                      fontSize: 30,
                    }}
                  />
                </InputField>
              </Row>
              <Row className="mb-2">
                <InputField label="Contact No." iconPlacement="left">
                  <PhoneInTalkIcon
                    sx={{
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                      fontSize: 30,
                    }}
                  />
                </InputField>
              </Row>

              <Row className="mb-2">
                <InputField label="Email ID" iconPlacement="left">
                  <MarkEmailReadIcon
                    sx={{
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                      fontSize: 30,
                    }}
                  />
                </InputField>
              </Row>
              <Row className="mb-2">
                <InputField label="Address Line 1" iconPlacement="left">
                  <HomeIcon
                    sx={{
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                      fontSize: 30,
                    }}
                  />
                </InputField>
              </Row>
              <Row className="mb-2">
                <InputField label="Address Line 2" iconPlacement="left">
                  <HomeIcon
                    sx={{
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                      fontSize: 30,
                    }}
                  />
                </InputField>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Link to="../signin" style={{ textDecoration: "none" }}>
                    <Button
                      variant="primary"
                      size="lg"
                      className="btn-primary"
                      style={{ width: "100%", display: "block" }}
                    >
                      Update
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          md={5}
          style={{
            backgroundColor: "white",
            borderRadius: 15,
            height: "100%",
            overflowY: "scroll",
          }}
          className="row__allow__gutter px-5"
        >
          <Row className="row__allow__gutter px-5 pt-3">
            <Col md={12}>
              <h2 style={{ color: "#ff6666" }}>History</h2>
            </Col>
          </Row>

          {/* Bookings */}
          <List>
            <ListItem>
              <UserBooking
                title="TITLE GOES HERE"
                startDate="2020-12-03"
                endDate="2020-12-05"
                totalCost="4200"
                totalRooms="1"
                totalGuests="2"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <UserBooking
                title="TITLE GOES HERE"
                startDate="2020-12-03"
                endDate="2020-12-05"
                totalCost="4200"
                totalRooms="1"
                totalGuests="2"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <UserBooking
                title="TITLE GOES HERE"
                startDate="2020-12-03"
                endDate="2020-12-05"
                totalCost="4200"
                totalRooms="1"
                totalGuests="2"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <UserBooking
                title="TITLE GOES HERE"
                startDate="2020-12-03"
                endDate="2020-12-05"
                totalCost="4200"
                totalRooms="1"
                totalGuests="2"
              />
            </ListItem>
          </List>
        </Col>
      </Row>
    </>
  );
};

export default UserProfileScreen;
