import React, { useState, useEffect, useCallback } from "react";
import { Col, Container, Image, Navbar, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "material-ui-search-bar";

import logo from "../assets/hhlogo.png";
import userTempProfPic from "../assets/userTempProfilePic.png";
import "../assets/css/main.css";
import userAvatarMale from "../assets/userAvatarMale.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  LinearProgress,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import HostRentalBookingList from "../Components/HostRentalBookingList";
import resortPhoto from "../assets/pixabay_maldives-1200.jpg";
import InputField from "../Components/InputField";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch, useSelector } from "react-redux";
import BAHdialog from "../Components/BAHdialog";
import { getRentals } from "../app/Actions/hostActions";

const HostProfileScreen = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.user);
  const [userRole, setUserRole] = useState("");
  const [hostRentals, setHostRentals] = useState(null);
  const [loading, setLoading] = useState(false);

  const getHostRentalsWithBookings = async () => {
    setLoading(true);
    const userId = await userDetails.userId;
    const userAccessToken = await userDetails.accessToken;
    const response = await dispatch(getRentals(userId, userAccessToken));
    setHostRentals(response);
    setLoading(false);
  };

  useEffect(() => {
    getHostRentalsWithBookings();
  }, []);

  if (loading) {
    return <LinearProgress />;
  }

  if (!loading && !hostRentals) {
    return <Typography align="center">No rentals found</Typography>;
  }

  if (userRole === "traveller" && userRole !== undefined) {
    return <BAHdialog setUserRole={setUserRole} />;
  }

  return (
    <div>
      {hostRentals && (
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
                    <Link to="/host/me" style={{ textDecoration: "none" }}>
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
              <Col md={8}>
                <h5 style={{ textAlign: "left", color: "#B2B2B2" }}>
                  Welcome to Holiday Homes
                </h5>
              </Col>
              <Col>
                <Link to="../addplace" style={{ textDecoration: "none" }}>
                  <Button
                    variant="primary"
                    size="lg"
                    className="btn-primary"
                    style={{ width: "100%", display: "block" }}
                  >
                    Add Rental
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>

          {/* Profile - Rentals */}
          <Row
            className="row__allow__gutter cover-photo-host-profile px-5 py-5"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Col
              md={7}
              style={{
                backgroundColor: "#e5e5e5",
                borderRadius: 15,
                height: "100%",
                overflowY: "scroll",
              }}
              className="row__allow__gutter px-5"
            >
              <Row className="row__allow__gutter px-5 pt-3">
                <Col md={12}>
                  <h2 style={{ color: "#ff6666" }}>Rentals</h2>
                </Col>
              </Row>
              <List>
                {hostRentals.map((hostRental, index) => {
                  return (
                    <div key={hostRental.rental_id}>
                      <ListItem key={hostRental.rental_id}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography color="#ff6666">
                              {hostRental.name}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            {hostRental.bookings !== null && (
                              <HostRentalBookingList
                                bookings={hostRental.bookings}
                              />
                            )}
                          </AccordionDetails>
                        </Accordion>
                      </ListItem>
                      {index < hostRentals.length - 1 ? (
                        <Divider variant="middle" component="li" />
                      ) : null}
                    </div>
                  );
                })}
              </List>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default HostProfileScreen;
