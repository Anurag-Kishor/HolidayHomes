import React, { useEffect, useState, useCallback } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "material-ui-search-bar";
import { Box } from "@mui/system";
import {
  Divider,
  LinearProgress,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import UserBooking from "../Components/UserBooking";
import {
  getUserDetails,
  getUserBookings,
  updateProfileDetails,
} from "../app/Actions/userActions";
const UserProfileScreen = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.user);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = React.useState("");

  // const [profileDetails, setProfileDetails] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");

  const [userBookings, setUserBookings] = useState([]);
  const getUserProfileDetails = useCallback(async () => {
    const getAccessToken = await userDetails.accessToken;
    const getUserId = await userDetails.userId;

    //User Details
    const userDetailsResponse = await dispatch(
      getUserDetails(getUserId, getAccessToken)
    );
    // setProfileDetails(userDetailsResponse);
    setFirstName(userDetailsResponse.firstname);
    setLastName(userDetailsResponse.lastname);
    setContactNo(userDetailsResponse.phonenumber);
    setAddressLine1(userDetailsResponse.addressline1);
    setAddressLine2(userDetailsResponse.addressline2);

    //User Bookings
    const userBookingsResponse = await dispatch(
      getUserBookings(getUserId, getAccessToken)
    );
    console.log(userBookingsResponse);
    setUserBookings(userBookingsResponse);
    setLoading(false);
  }, []);

  useEffect(() => {
    getUserProfileDetails();
  }, []);

  const updateProfileDetailsFunc = async () => {
    const getAccessToken = await userDetails.accessToken;
    const getUserId = await userDetails.userId;
    const userDataObj = {
      firstName: firstName,
      lastName: lastName,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      phoneNumber: contactNo,
    };
    const response = await dispatch(
      updateProfileDetails(userDataObj, getAccessToken, getUserId)
    );
    console.log(response);
  };
  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <Container fluid="md">
            <Row>
              <Navbar>
                <Container>
                  <Navbar.Brand>
                    <Link to="/">
                      <Image src={logo} height="100" />
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Link to="/addplace" style={{ textDecoration: "none" }}>
                      <Navbar.Text
                        className="p-5 h5"
                        style={{ color: "#ff6666" }}
                      >
                        Become a Host
                      </Navbar.Text>
                      {/* <BAHdialog /> */}
                    </Link>
                    <Link to="/user/me" style={{ textDecoration: "none" }}>
                      <Navbar.Text
                        className="p-5 h5"
                        style={{ color: "#ff6666" }}
                      >
                        Me
                      </Navbar.Text>
                    </Link>
                    <Link to="/signin" style={{ textDecoration: "none" }}>
                      <Navbar.Text
                        className="p-5 h5"
                        style={{ color: "#ff6666" }}
                      >
                        Logout
                      </Navbar.Text>
                    </Link>
                  </Navbar.Collapse>
                </Container>
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
                    <InputField
                      label="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      iconPlacement="left"
                    >
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
                    <InputField
                      label="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      iconPlacement="left"
                    >
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
                    <InputField
                      label="Contact No."
                      value={contactNo}
                      onChange={(e) => setContactNo(e.target.value)}
                      iconPlacement="left"
                    >
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
                    <InputField
                      label="Address Line 1"
                      value={addressLine1}
                      onChange={(e) => setAddressLine1(e.target.value)}
                      iconPlacement="left"
                    >
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
                    <InputField
                      label="Address Line 2"
                      value={addressLine2}
                      onChange={(e) => setAddressLine2(e.target.value)}
                      iconPlacement="left"
                    >
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
                          onClick={updateProfileDetailsFunc}
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
                {userBookings.map((userBooking, index) => {
                  return (
                    <>
                      <ListItem>
                        <UserBooking
                          title={userBooking.name}
                          startDate={userBooking.trip_start_date}
                          endDate={userBooking.trip_end_date}
                          totalCost={userBooking.tripcost}
                          totalRooms={userBooking.numberofrooms}
                          totalGuests={userBooking.numberoftravellers}
                        />
                      </ListItem>
                      {index < userBookings.length - 1 ? (
                        <Divider variant="inset" component="li" />
                      ) : null}
                    </>
                  );
                })}
              </List>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default UserProfileScreen;
