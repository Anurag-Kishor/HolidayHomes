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
import SearchBar from "material-ui-search-bar";
import logo from "../assets/hhlogo.png";
import rentalPhoto from "../assets/pexels-alexandr-podvalny-3278215.jpg";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Rating, Typography, Divider, Paper, TextField } from "@mui/material";
import "../../node_modules/rsuite/dist/rsuite.min.css";
import DateRangePicker from "rsuite/DateRangePicker";
import PasswordIcon from "@mui/icons-material/Password";

import "../assets/css/main.css";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
function RentalInfo() {
  const [searchValue, setSearchValue] = React.useState("");
  var rentalPhotoVar = {
    backgroundImage: "url(" + rentalPhoto + ")",
  };
  return (
    <>
      {/* Navbar - Search */}
      <Row>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <Image src={logo} height="100" />
            </Navbar.Brand>
            <Col md={{ span: 5 }}>
              <SearchBar
                value={searchValue}
                onChange={(newValue) => setSearchValue(searchValue)}
                onRequestSearch={() => {}}
              />
            </Col>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="p-5 h5" style={{ color: "#ff6666" }}>
                Become a Host
              </Navbar.Text>
              <Navbar.Text className="p-5 h5" style={{ color: "#ff6666" }}>
                Signup
              </Navbar.Text>
              <Navbar.Text className="p-5 h5" style={{ color: "#ff6666" }}>
                Login
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>

      {/* Rental Photo */}
      <Row className="photo-rental-info" style={rentalPhotoVar}></Row>

      <Row>
        {/* LEFT HAND SIDE FROM TITLE TILL REVIEWS */}
        <Col md={9}>
          {/* Rental Title - Location */}
          <Row className="px-5 pt-5" style={{ textAlign: "left" }}>
            <Col md={{ span: 12 }}>
              <h3>Title goes here</h3>{" "}
            </Col>
          </Row>
          <Row className="px-5" style={{ textAlign: "left", color: "#8e8e8e" }}>
            <Col md={{ span: 12 }}>
              <h5>City goes here</h5>{" "}
            </Col>
          </Row>

          {/* Line After Rental Title - Location */}
          <Row className="px-5">
            <Col md={{ span: 10 }}>
              <hr />
            </Col>
          </Row>

          {/* Room Details */}
          <Row>
            <Col md={6}>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Col
                  md={{ span: 4, offset: 2 }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginRight: 5,
                  }}
                >
                  <RoomPreferencesIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={2} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Room Type</h5>
                  </Row>
                  <Row>
                    <h6>Single</h6>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Col
                  md={{ span: 1 }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginRight: 5,
                  }}
                >
                  <RoomPreferencesIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Room Type</h5>
                  </Row>
                  <Row>
                    <h6>Single</h6>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-3 mb-1">
            <Col md={6}>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Col
                  md={{ span: 4, offset: 2 }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginRight: 5,
                  }}
                >
                  <RoomPreferencesIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={2} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Room Type</h5>
                  </Row>
                  <Row>
                    <h6>Single</h6>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Col
                  md={{ span: 1 }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginRight: 5,
                  }}
                >
                  <RoomPreferencesIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Room Type</h5>
                  </Row>
                  <Row>
                    <h6>Single</h6>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Line - After Room Details */}
          <Row className="px-5">
            <Col md={{ span: 10 }}>
              <hr />
            </Col>
          </Row>

          {/* About The Listing */}
          <Row className="px-5 pt-3" style={{ textAlign: "left" }}>
            <Col md={{ span: 12 }}>
              <h4>About the listing</h4>{" "}
            </Col>
          </Row>
          <Row className="px-5" style={{ textAlign: "left" }}>
            <Col md={{ span: 10 }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum maximus nunc id augue tristique, non tempor dolor
                laoreet. Fusce laoreet sem est, nec bibendum sapien fringilla
                sit amet. Nulla congue ipsum non augue suscipit, at accumsan est
                volutpat. Proin tortor tortor, sodales id ex at, suscipit
                laoreet orci. Nullam rhoncus dui id magna maximus, eu tincidunt
                nibh porttitor. Aenean vestibulum luctus dui non laoreet. Donec
                blandit libero vel ante sodales aliquam. Sed ullamcorper
                pellentesque mattis. Sed vel sapien tincidunt, elementum nulla
                sit amet, malesuada ante. Phasellus consequat nec lacus in
                mattis. Suspendisse dapibus sapien vitae massa tincidunt, in
                luctus odio facilisis. Fusce in felis sapien.s
              </p>{" "}
            </Col>
          </Row>

          {/* Line - After About the Listing */}
          <Row className="px-5">
            <Col md={{ span: 10 }}>
              <hr />
            </Col>
          </Row>

          {/* Amenities */}
          <Row className="px-5 pt-3" style={{ textAlign: "left" }}>
            <Col md={{ span: 10 }}>
              <h4>Amenities</h4>{" "}
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Col md={{ span: 2 }}>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Col
                  md={{ span: 4 }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginRight: 5,
                  }}
                >
                  <RoomPreferencesIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Room Type</h5>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={{ span: 2 }}>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Col
                  md={{ span: 4 }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginRight: 5,
                  }}
                >
                  <RoomPreferencesIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Room Type</h5>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Col md={{ span: 2 }}>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Col
                  md={{ span: 4 }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginRight: 5,
                  }}
                >
                  <RoomPreferencesIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Room Type</h5>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={{ span: 2 }}>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Col
                  md={{ span: 4 }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginRight: 5,
                  }}
                >
                  <RoomPreferencesIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Room Type</h5>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Col md={{ span: 2 }}>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Col
                  md={{ span: 4 }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginRight: 5,
                  }}
                >
                  <RoomPreferencesIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Room Type</h5>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={{ span: 2 }}>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Col
                  md={{ span: 4 }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginRight: 5,
                  }}
                >
                  <RoomPreferencesIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Room Type</h5>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Col md={{ span: 2 }}>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Col
                  md={{ span: 4 }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginRight: 5,
                  }}
                >
                  <RoomPreferencesIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Room Type</h5>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={{ span: 2 }}>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Col
                  md={{ span: 4 }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginRight: 5,
                  }}
                >
                  <RoomPreferencesIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Room Type</h5>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Line - After Amenities */}
          <Row className="px-5">
            <Col md={{ span: 10 }}>
              <hr />
            </Col>
          </Row>

          {/* Rental Rules */}
          <Row className="px-5 pt-3" style={{ textAlign: "left" }}>
            <Col md={{ span: 10 }}>
              <h4>Rental Rules</h4>{" "}
            </Col>
          </Row>
          <Row className="px-5 pt-1 mb-3" style={{ textAlign: "left" }}>
            <Col md={{ span: 10 }}>
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <FiberManualRecordIcon style={{ color: "#ff6666" }} />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <FiberManualRecordIcon style={{ color: "#ff6666" }} />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <FiberManualRecordIcon style={{ color: "#ff6666" }} />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <FiberManualRecordIcon style={{ color: "#ff6666" }} />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
              </List>
            </Col>
          </Row>

          {/* Line -  After Rental Rules */}
          <Row className="px-5">
            <Col md={{ span: 10 }}>
              <hr />
            </Col>
          </Row>

          {/* Availability */}
          <Row className="px-5 pt-3 mb-1" style={{ textAlign: "left" }}>
            <Col md={{ span: 10 }}>
              <h4>Availability</h4>{" "}
            </Col>
          </Row>
          <Row className="px-5 mb-3">
            <Col
              md={{ span: 10 }}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <DateRangePicker
                appearance="default"
                style={{ color: "#ff6666 !important" }}
              />
            </Col>
          </Row>

          {/* Line - After Availability */}
          <Row className="px-5">
            <Col md={{ span: 10 }}>
              <hr />
            </Col>
          </Row>

          {/* Reviews */}
          <Row className="px-5 pt-3 mb-1" style={{ textAlign: "left" }}>
            <Col md={{ span: 10 }}>
              <h4>Reviews</h4>{" "}
            </Col>
          </Row>
          <Row
            style={{
              alignItems: "center",
              height: "4vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
            className="px-5"
          >
            <Col
              md={{ span: 2 }}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Rating name="read-only" value={5} readOnly />
            </Col>
            <Col md={3}>
              <Typography align="left">49 Reviews</Typography>{" "}
            </Col>
          </Row>
          <Row className="px-5 mb-3">
            <Col md={{ span: 7, offset: 2 }}>
              <List sx={{ width: "100%", maxWidth: 700 }}>
                <ListItem>
                  <ListItemText
                    primary="Name goes here"
                    secondary={
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Rating name="read-only" value={5} readOnly />
                          <Typography variant="body1">March'21</Typography>
                        </div>
                        <Typography align="left">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum maximus nunc id augue tristique, non
                          tempor dolor laoreet. Fusce laoreet sem est, nec
                          bibendum sapien fringilla sit amet.
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Name goes here"
                    secondary={
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Rating name="read-only" value={5} readOnly />
                          <Typography variant="body1">March'21</Typography>
                        </div>
                        <Typography align="left">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum maximus nunc id augue tristique, non
                          tempor dolor laoreet. Fusce laoreet sem est, nec
                          bibendum sapien fringilla sit amet.
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Name goes here"
                    secondary={
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Rating name="read-only" value={5} readOnly />
                          <Typography variant="body1">March'21</Typography>
                        </div>
                        <Typography align="left">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum maximus nunc id augue tristique, non
                          tempor dolor laoreet. Fusce laoreet sem est, nec
                          bibendum sapien fringilla sit amet.
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              </List>
            </Col>
          </Row>
        </Col>
        {/* RIGHT HAND SIDE BOOKING FORM */}
        <Col md={3}>
          <Row className="px-5 pt-5">
            <Paper elevation={5} style={{ padding: 10 }}>
              <Typography variant="h5" align="left" style={{ marginLeft: 30 }}>
                Rs. 4200/Day
              </Typography>
              <Row style={{ marginLeft: 20 }}>
                <Col md={5}>
                  <Rating name="read-only" value={5} readOnly />{" "}
                </Col>
                <Col md={5}>
                  <Typography align="left">49 Reviews</Typography>{" "}
                </Col>
              </Row>
              <hr />
              <Paper
                variant="outlined"
                style={{
                  padding: 20,
                  borderColor: "#ff6666",
                  marginBottom: 35,
                }}
              >
                <Row className="h-100 d-flex flex-row align-items-center mb-3">
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
                <Row className="h-100 d-flex flex-row align-items-center mb-3">
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
                <Row className="h-100 d-flex flex-row align-items-center mb-3">
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
              </Paper>
              <Row className="mb-4">
                <Col md={{ span: 8, offset: 2 }} className="d-grid gap-2">
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#FF6666",
                      borderColor: "#ff6666",
                    }}
                  >
                    Make Payment
                  </Button>
                </Col>
              </Row>
            </Paper>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default RentalInfo;
