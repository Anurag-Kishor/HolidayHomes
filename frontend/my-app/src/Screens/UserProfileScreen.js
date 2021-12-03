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

import { Link } from "react-router-dom";

import logo from "../assets/hhlogo.png";
import "../assets/css/main.css";
import userAvatarMale from "../assets/userAvatarMale.png";
import userTempProfPic from "../assets/userTempProfilePic.png";

import SearchBar from "material-ui-search-bar";
import { Box } from "@mui/system";
import { Divider, List, ListItem, TextField, Typography } from "@mui/material";
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
          <Col md={8}>
            <h5 style={{ textAlign: "left", color: "#B2B2B2" }}>
              Welcome to Holiday Homes
            </h5>
          </Col>
          <Col>
            <Link to="../signin" style={{ textDecoration: "none" }}>
              <Button
                variant="primary"
                size="lg"
                className="btn-primary"
                style={{ width: "100%", display: "block" }}
              >
                Add Rental(FOR HOST)
              </Button>
            </Link>
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
                  <h3>Profile</h3>
                </Col>
              </Row>
              <Row className="mb-2">
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
              </Row>
              <Row className="mb-2">
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
              </Row>

              <Row className="mb-2">
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
              </Row>
              <Row className="mb-2">
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
              </Row>
              <Row className="mb-2">
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
              <h3>History</h3>
            </Col>
          </Row>

          {/* Bookings */}
          <List>
            <ListItem>
              <Row className="row__allow__gutter px-5 pb-2">
                <Col
                  md={3}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Image src={resortPhoto} height="100" />
                </Col>
                <Col md={9}>
                  <Row className="row__allow__gutter">
                    <Col md={12}>
                      <Typography variant="h5" align="left">
                        Title goes here
                      </Typography>
                    </Col>
                  </Row>
                  <Row className="row__allow__gutter pt-1">
                    <Col md={7}>
                      <Typography variant="h6" align="left">
                        Start Date - End Date
                      </Typography>
                    </Col>
                    <Col md={5}>
                      <Typography variant="h6" align="right">
                        Rs. 4200
                      </Typography>
                    </Col>
                  </Row>
                  <Row className="pt-1">
                    <Col md={{ span: 4 }} className="apply__borders__5">
                      1 ROOM
                    </Col>
                    <Col
                      md={{ span: 4, offset: 1 }}
                      className="apply__borders__5"
                    >
                      10 GUESTS
                    </Col>
                  </Row>
                </Col>
              </Row>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <Row className="row__allow__gutter px-5 pt-2 pb-2">
                <Col
                  md={3}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Image src={resortPhoto} height="100" />
                </Col>
                <Col md={9}>
                  <Row className="row__allow__gutter">
                    <Col md={12}>
                      <Typography variant="h5" align="left">
                        Title goes here
                      </Typography>
                    </Col>
                  </Row>
                  <Row className="row__allow__gutter pt-1">
                    <Col md={7}>
                      <Typography variant="h6" align="left">
                        Start Date - End Date
                      </Typography>
                    </Col>
                    <Col md={5}>
                      <Typography variant="h6" align="right">
                        Rs. 4200
                      </Typography>
                    </Col>
                  </Row>
                  <Row className="pt-1">
                    <Col md={{ span: 4 }} className="apply__borders__5">
                      1 ROOM
                    </Col>
                    <Col
                      md={{ span: 4, offset: 1 }}
                      className="apply__borders__5"
                    >
                      10 GUESTS
                    </Col>
                  </Row>
                </Col>
              </Row>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <Row className="row__allow__gutter px-5 pt-2 pb-2">
                <Col
                  md={3}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Image src={resortPhoto} height="100" />
                </Col>
                <Col md={9}>
                  <Row className="row__allow__gutter">
                    <Col md={12}>
                      <Typography variant="h5" align="left">
                        Title goes here
                      </Typography>
                    </Col>
                  </Row>
                  <Row className="row__allow__gutter pt-1">
                    <Col md={7}>
                      <Typography variant="h6" align="left">
                        Start Date - End Date
                      </Typography>
                    </Col>
                    <Col md={5}>
                      <Typography variant="h6" align="right">
                        Rs. 4200
                      </Typography>
                    </Col>
                  </Row>
                  <Row className="pt-1">
                    <Col md={{ span: 4 }} className="apply__borders__5">
                      1 ROOM
                    </Col>
                    <Col
                      md={{ span: 4, offset: 1 }}
                      className="apply__borders__5"
                    >
                      10 GUESTS
                    </Col>
                  </Row>
                </Col>
              </Row>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <Row className="row__allow__gutter px-5 pt-2 pb-2">
                <Col
                  md={3}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Image src={resortPhoto} height="100" />
                </Col>
                <Col md={9}>
                  <Row className="row__allow__gutter">
                    <Col md={12}>
                      <Typography variant="h5" align="left">
                        Title goes here
                      </Typography>
                    </Col>
                  </Row>
                  <Row className="row__allow__gutter pt-1">
                    <Col md={7}>
                      <Typography variant="h6" align="left">
                        Start Date - End Date
                      </Typography>
                    </Col>
                    <Col md={5}>
                      <Typography variant="h6" align="right">
                        Rs. 4200
                      </Typography>
                    </Col>
                  </Row>
                  <Row className="pt-1">
                    <Col md={{ span: 4 }} className="apply__borders__5">
                      <Typography variant="body1" align="center">
                        1 ROOM
                      </Typography>
                    </Col>
                    <Col
                      md={{ span: 4, offset: 1 }}
                      className="apply__borders__5"
                    >
                      <Typography variant="body1" align="center">
                        10 GUESTS
                      </Typography>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </ListItem>
          </List>
        </Col>
      </Row>
    </>
  );
};

export default UserProfileScreen;
