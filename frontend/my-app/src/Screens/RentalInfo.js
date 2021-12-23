import React, { useState, useEffect, useCallback } from "react";
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
  LinearProgress,
} from "@mui/material";
import dateFormat, { masks } from "dateformat";
import { addBookingAction, fetchRentalInfo } from "../app/Actions/appActions";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
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
import SearchCardNavbar from "../Components/SearchCardNavbar";
import { checkForAvailability } from "../app/Actions/appActions";

function RentalInfo(props) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const userDetails = useSelector((state) => state.user.user);
  const [searchValue, setSearchValue] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [availabilityDates, setAvailabilityDates] = useState([]);
  const [checkOutDate, setCheckOutDate] = useState("");
  const [noOfGuests, setNoOfGuests] = useState("");
  const [errors, setErrors] = useState("");
  const [rentalInfo, setRentalInfo] = useState({});
  const [totalAmount, setTotalAmount] = useState();
  const [unmodifiable, setUnmodifiable] = useState(false);
  var rentalPhotoVar = {
    backgroundImage: "url(" + rentalPhoto + ")",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  const getRentalData = useCallback(async () => {
    const userAccessToken = await userDetails.accessToken;
    setRentalInfo(await dispatch(fetchRentalInfo(id, userAccessToken)));
    setLoading(false);
  }, []);

  useEffect(() => {
    getRentalData();
  }, []);

  const checkAvailability = async () => {
    const startDate = dateFormat(availabilityDates[0], "yyyy-mm-dd");
    const endDate = dateFormat(availabilityDates[1], "yyyy-mm-dd");

    if (noOfGuests > rentalInfo.numberofguests || noOfGuests < 1) {
      return setErrors("No of guests entered are more or less than expected");
    }

    const toCheckObj = {
      rentalId: id,
      bookFrom: startDate,
      bookTo: endDate,
    };

    const ifAvailable = await dispatch(
      checkForAvailability(toCheckObj, userDetails.accessToken)
    );

    if (ifAvailable.data) {
      setIsAvailable(true);
      const start = new Date(startDate);
      const end = new Date(endDate);
      const Difference_In_Time = end.getTime() - start.getTime();
      const days = Difference_In_Time / (1000 * 3600 * 24);
      const finalAmount = (days + 1) * rentalInfo.priceperday;
      setTotalAmount(finalAmount);
      setUnmodifiable(true);
      setErrors("");
    } else {
      setErrors("Rental is not available between the selected dates");
    }
  };

  const modifyData = () => {
    setUnmodifiable(false);
    setIsAvailable(false);
    setErrors("");
  };

  const addBooking = async () => {
    const startDate = dateFormat(availabilityDates[0], "yyyy-mm-dd");
    const endDate = dateFormat(availabilityDates[1], "yyyy-mm-dd");
    const bookingObj = {
      rentalId: id,
      userId: userDetails.userId,
      bookFrom: startDate,
      bookTo: endDate,
      amount: totalAmount,
      numberOfGuests: noOfGuests,
    };

    const response = await dispatch(
      addBookingAction(bookingObj, userDetails.accessToken)
    );
    if (response.success === true) {
      navigate("../");
    } else {
      setErrors(response.error);
    }
  };

  return (
    <>
      {/* Navbar - Search */}
      {loading ? (
        <LinearProgress />
      ) : (
        <>
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
                  <h3>{rentalInfo.name}</h3>{" "}
                </Col>
              </Row>
              <Row
                className="px-5"
                style={{ textAlign: "left", color: "#8e8e8e" }}
              >
                <Col md={{ span: 12 }}>
                  <h5>{rentalInfo.city}, Gujarat, India</h5>{" "}
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
                        <h6>{rentalInfo.rentaltype}</h6>
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
                        <h6>{rentalInfo.numberofguests}</h6>
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
                        <h5>Rooms</h5>
                      </Row>
                      <Row>
                        <h6>{rentalInfo.numberofrooms}</h6>
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
                        <h6>ADD BEDS</h6>
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
                  <p>{rentalInfo.description}</p>{" "}
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
                {rentalInfo &&
                  rentalInfo.services.map((service, index) => {
                    return (
                      <Row
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          alignItems: "center",
                          marginTop: 5,
                        }}
                      >
                        <Col md={{ span: 2 }} key={index}>
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
                                <h5>{service.description}</h5>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    );
                  })}
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
                  md={2}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <Rating name="read-only" value={rentalInfo.avg} readOnly />
                </Col>
                <Col md={1}>
                  <Typography align="left">
                    {rentalInfo.count} Reviews
                  </Typography>{" "}
                </Col>
                <Col md={6}>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <CreateIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
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
                              elit. Vestibulum maximus nunc id augue tristique,
                              non tempor dolor laoreet. Fusce laoreet sem est,
                              nec bibendum sapien fringilla sit amet.
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
                              elit. Vestibulum maximus nunc id augue tristique,
                              non tempor dolor laoreet. Fusce laoreet sem est,
                              nec bibendum sapien fringilla sit amet.
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
                              elit. Vestibulum maximus nunc id augue tristique,
                              non tempor dolor laoreet. Fusce laoreet sem est,
                              nec bibendum sapien fringilla sit amet.
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
                  <Typography
                    variant="h5"
                    align="left"
                    style={{ marginLeft: 30 }}
                  >
                    Rs. {rentalInfo.priceperday}/Day
                  </Typography>
                  <Row style={{ marginLeft: 20 }}>
                    <Col md={5}>
                      <Rating
                        name="read-only"
                        value={rentalInfo.avg}
                        readOnly
                      />{" "}
                    </Col>
                    <Col md={5}>
                      <Typography align="left">
                        {rentalInfo.count} Reviews
                      </Typography>{" "}
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
                      <DateRangePicker
                        appearance="default"
                        value={availabilityDates}
                        disabled={unmodifiable}
                        onChange={setAvailabilityDates}
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
                          // value={availabilityDates[0]}
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
                          // value={availabilityDates[1]}
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
                          disabled={unmodifiable}
                          label="No. Of Guests"
                          value={noOfGuests}
                          onChange={(e) => setNoOfGuests(e.target.value)}
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
                        <Col
                          md={{ span: 4, offset: 1 }}
                          className="d-grid gap-2"
                        >
                          <Typography variant="body1">
                            Total Amount: {totalAmount}
                          </Typography>
                        </Col>
                        <Col
                          md={{ span: 4, offset: 2 }}
                          className="d-grid gap-2"
                        >
                          <Typography variant="body1">
                            No of Guests: {noOfGuests}
                          </Typography>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col
                          md={{ span: 6, offset: 3 }}
                          className="d-grid gap-2"
                        >
                          <Typography variant="body1">
                            Check In Date: {availabilityDates[0].toString()}
                          </Typography>
                        </Col>
                        <Col
                          md={{ span: 6, offset: 3 }}
                          className="d-grid gap-2 mt-3"
                        >
                          <Typography variant="body1">
                            Check Out Date: {availabilityDates[1].toString()}
                          </Typography>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col
                          md={{ span: 4, offset: 1 }}
                          className="d-grid gap-2"
                        >
                          <Button
                            variant="primary"
                            style={{
                              backgroundColor: "#FF6666",
                              borderColor: "#ff6666",
                            }}
                            onClick={modifyData}
                          >
                            Modify
                          </Button>
                        </Col>
                        <Col
                          md={{ span: 4, offset: 2 }}
                          className="d-grid gap-2"
                        >
                          <Button
                            variant="primary"
                            style={{
                              backgroundColor: "#FF6666",
                              borderColor: "#ff6666",
                            }}
                            onClick={addBooking}
                          >
                            Make Payment
                          </Button>
                        </Col>
                      </Row>
                    </>
                  ) : (
                    <>
                      <Row className="mb-4">
                        <Col
                          md={{ span: 8, offset: 2 }}
                          className="d-grid gap-2"
                        >
                          <Button
                            variant="primary"
                            onClick={checkAvailability}
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
      )}
    </>
  );
}

export default RentalInfo;
