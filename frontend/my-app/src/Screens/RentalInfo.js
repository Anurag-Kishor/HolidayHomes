import React, { useState } from "react";
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
import {
  Rating,
  Typography,
  Divider,
  Paper,
  TextField,
  Alert,
} from "@mui/material";
import "../../node_modules/rsuite/dist/rsuite.min.css";
import DateRangePicker from "rsuite/DateRangePicker";
import PasswordIcon from "@mui/icons-material/Password";
import GarageIcon from "@mui/icons-material/Garage";
import GroupsIcon from "@mui/icons-material/Groups";
import GiteIcon from "@mui/icons-material/Gite";
import IconButton from "@mui/material/IconButton";
import BedIcon from "@mui/icons-material/Bed";
import DeckIcon from "@mui/icons-material/Deck";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BalconyIcon from "@mui/icons-material/Balcony";
import ParkIcon from "@mui/icons-material/Park";
import PoolIcon from "@mui/icons-material/Pool";
import BadgeIcon from "@mui/icons-material/Badge";
import TodayIcon from "@mui/icons-material/Today";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import CreateIcon from "@mui/icons-material/Create";
import PetsIcon from "@mui/icons-material/Pets";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import "../assets/css/main.css";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../Components/Footer";
import NavbarHH from "../Components/NavbarHH";
function RentalInfo() {
  const [searchValue, setSearchValue] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [noOfGuests, setNoOfGuests] = useState("");
  const [errors, setErrors] = useState("");
  var rentalPhotoVar = {
    backgroundImage: "url(" + rentalPhoto + ")",
  };
  return (
    <>
      {/* Navbar - Search */}
      {/* <Row>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <Image src={logo} height="100" />
            </Navbar.Brand>
            <Col md={{ span: 4, offset: 1 }}>
              <SearchBar
                value={searchValue}
                onChange={(newValue) => setSearchValue(searchValue)}
                onRequestSearch={() => { }}
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
      </Row> */}
      <NavbarHH />

      {/* Rental Photo */}
      <Row className="photo-rental-info" style={rentalPhotoVar}></Row>

      <Row>
        {/* LEFT HAND SIDE FROM TITLE TILL REVIEWS */}
        <Col md={8}>
          {/* Rental Title - Location */}
          {errors.length !== 0 ? (
            <Row className="pt-0 px-10">
              <Col xs={12} lg={12}>
                <Alert
                  style={{
                    backgroundColor: "#ff6666",
                    color: "white",
                    borderColor: "#ff6666",
                  }}
                >
                  {errors}
                </Alert>
              </Col>
            </Row>
          ) : null}
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
                  <GroupsIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Guests</h5>
                  </Row>
                  <Row>
                    <h6>20</h6>
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
                  <GiteIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={2} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Bed Rooms</h5>
                  </Row>
                  <Row>
                    <h6>2</h6>
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
                  <BedIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Beds</h5>
                  </Row>
                  <Row>
                    <h6>3</h6>
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
                  <GarageIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Parking</h5>
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
                  <DeckIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Cafe</h5>
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
                  <BalconyIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Balcony</h5>
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
                  <ParkIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Garden</h5>
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
                  <PoolIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Swimming pool</h5>
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
                  <AcUnitIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Air Conditioner</h5>
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
                  <SportsEsportsIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Game Zone</h5>
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
                  <FitnessCenterIcon style={{ color: "#ff6666" }} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Row>
                    <h5>Gymnasium</h5>
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
                    <SmokeFreeIcon style={{ color: "#ff6666" }} />
                  </ListItemIcon>
                  <ListItemText primary="No Smoking" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <PetsIcon style={{ color: "#ff6666" }} />
                  </ListItemIcon>
                  <ListItemText primary="Pets Allowed" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <CancelScheduleSendIcon style={{ color: "#ff6666" }} />
                  </ListItemIcon>
                  <ListItemText primary="Free Cancelation before 48 hours" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <HistoryToggleOffIcon style={{ color: "#ff6666" }} />
                  </ListItemIcon>
                  <ListItemText primary="Check-in: After 9:00 AM" />
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
          {/* <Row className="px-5 pt-3 mb-1" style={{ textAlign: "left" }}>
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
          </Row> */}

          {/* Line - After Availability */}
          {/* <Row className="px-5">
            <Col md={{ span: 10 }}>
              <hr />
            </Col>
          </Row> */}

          {/* Reviews */}
          <Row className="px-5 pt-3 mb-1" style={{ textAlign: "left" }}>
            <Col md={{ span: 10 }}>
              <h4>Reviews</h4>{" "}
            </Col>
          </Row>
          {/* kavisha dev kashish */}
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
              md={2}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Rating name="read-only" value={5} readOnly />
            </Col>
            <Col md={1}>
              <Typography align="left">69 Reviews</Typography>{" "}
            </Col>
            <Col md={6}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <CreateIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Write a New Review"
                  variant="standard"
                  color="warning"
                  fullWidth
                />
                <CheckCircleIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  fullWidth
                />
              </Box>
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
        <Col md={4}>
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
                {/* <Row className="h-100 d-flex flex-row align-items-center mb-3">
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <BadgeIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      id="input-with-sx"
                      label="Full Name"
                      variant="standard"
                      color="warning"
                      fullWidth
                    />
                  </Box>
                </Row> */}
                <Row className="h-100 d-flex flex-row align-items-center mb-3">
                  <DateRangePicker
                    appearance="default"
                    style={{ color: "#ff6666 !important" }}
                  />
                </Row>
                <Row className="h-100 d-flex flex-row align-items-center mb-3">
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <TodayIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      id="input-with-sx"
                      label="Check-In-date"
                      disabled
                      variant="standard"
                      color="warning"
                      fullWidth
                    />
                  </Box>
                </Row>
                <Row className="h-100 d-flex flex-row align-items-center mb-3">
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <InsertInvitationIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      id="input-with-sx"
                      label="Check-Out-Date"
                      disabled
                      variant="standard"
                      color="warning"
                      fullWidth
                    />
                  </Box>
                </Row>
                <Row className="h-100 d-flex flex-row align-items-center">
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <GroupsIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      id="input-with-sx"
                      type="number"
                      min="1"
                      max="20"
                      label="No. Of Guests"
                      variant="standard"
                      color="warning"
                      fullWidth
                    />
                  </Box>
                </Row>
              </Paper>
              {isAvailable ? (
                <>
                  <Row className="mb-4">
                    <Col md={{ span: 8, offset: 2 }} className="d-grid gap-2">
                      <Typography variant="body1">
                        Total Amount: 13200
                      </Typography>
                    </Col>
                  </Row>
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
                </>
              ) : (
                <>
                  <Row className="mb-4">
                    <Col md={{ span: 8, offset: 2 }} className="d-grid gap-2">
                      <Button
                        variant="primary"
                        style={{
                          backgroundColor: "#FF6666",
                          borderColor: "#ff6666",
                        }}
                      >
                        Check Availability
                      </Button>
                    </Col>
                  </Row>
                </>
              )}
            </Paper>
          </Row>
        </Col>
      </Row>
      {/* Footer */}
      <Row className="row__allow__gutter pt-5">
        <Col>
          <Footer />
        </Col>
      </Row>
    </>
  );
}

export default RentalInfo;
