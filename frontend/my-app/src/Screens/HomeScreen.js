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
import logo from "../assets/hhlogo.png";
import resortPhoto from "../assets/pixabay_maldives-1200.jpg";
import testimonial1 from "../assets/1.png";
import testimonial2 from "../assets/2.png";
import testimonial3 from "../assets/3.png";
import "../assets/css/main.css";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Carousel } from "react-responsive-carousel";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

function HomeScreen() {
  return (
    <>
      {/* Cover Photo - Search Form - Navbar */}
      <Row className="cover-photo-home">
        <Col>
          {/* Navbar */}
          <Row>
            <Navbar>
              <Container>
                <Navbar.Brand href="#home">
                  <Image src={logo} height="100" />
                </Navbar.Brand>
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
          {/* Search Form */}
          <Row>
            <Col
              md={{ span: 4, offset: 3 }}
              style={{
                backgroundColor: "#e5e5e5",
                height: "60vh",
                borderRadius: 15,
              }}
              className="p-5"
            >
              <Row className="mb-3">
                <h4 style={{ textAlign: "center", color: "#ff6666" }}>
                  Explore Gujarat!
                </h4>
                <br />
                <h5>
                  Rent suitable homes and experience your trips at an affordable
                  cost.
                </h5>
              </Row>
              {/* Where Field */}
              <Row>
                <h5>Where</h5>
              </Row>
              <Row
                style={{
                  backgroundColor: "white",
                  borderRadius: 12,
                  height: "7vh",
                }}
                className="align-items-center mb-3"
              >
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    label="Email"
                    variant="standard"
                    color="warning"
                    fullWidth
                  />
                  <LocationOnIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                </Box>
              </Row>

              {/* Check In Field - Check Out Field */}
              <Row>
                <Col md={3}>
                  <h5>Check In</h5>
                </Col>
                <Col md={{ span: 3, offset: 4 }}>
                  <h5>Check Out</h5>
                </Col>
              </Row>
              <Row className=" align-items-center mb-3">
                <Col
                  md={5}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 12,
                    height: "7vh",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <TextField
                      id="input-with-sx"
                      label="Email"
                      variant="standard"
                      color="warning"
                      fullWidth
                    />
                    <LocationOnIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                  </Box>
                </Col>
                <Col
                  md={{ span: 5, offset: 2 }}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 12,
                    height: "7vh",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <TextField
                      id="input-with-sx"
                      label="Email"
                      variant="standard"
                      color="warning"
                      fullWidth
                    />
                    <LocationOnIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                  </Box>
                </Col>
              </Row>

              {/* Guest Field */}
              <Row>
                <h5>Guest</h5>
              </Row>
              <Row
                style={{
                  backgroundColor: "white",
                  borderRadius: 12,
                  height: "7vh",
                }}
                className="align-items-center mb-3"
              >
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    label="Email"
                    variant="standard"
                    color="warning"
                    fullWidth
                  />
                  <LocationOnIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                </Box>
              </Row>

              {/* Search Button */}
              <Row>
                <Col md={{ span: 8, offset: 2 }} className="d-grid">
                  <Button
                    variant="primary"
                    size="lg"
                    style={{
                      backgroundColor: "#FF6666",
                      borderColor: "#ff6666",
                    }}
                  >
                    Search
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Recommended */}
      <Row className="px-5 pt-5">
        <Col md={2}>
          <h4>Recommended</h4>{" "}
        </Col>
        <Col md={{ span: 2, offset: 8 }}>
          <Row>
            <h5>See All</h5>
          </Row>
        </Col>
      </Row>
      <Row className="px-5 mb-3">
        <Col>
          <Paper elevation={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={resortPhoto}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Holiday Inn Resort Bali Benoa
                  </Typography>
                  <Row
                    style={{
                      alignItems: "center",
                      height: "4vh",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Col
                      md={{ span: 3 }}
                      className="border rounded"
                      style={{ marginLeft: 10 }}
                    >
                      1 ROOM
                    </Col>
                    <Col md={{ span: 3, offset: 5 }}>
                      <Typography variant="body1" align="right">
                        Rs. 4200/Night
                      </Typography>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      alignItems: "center",
                      height: "4vh",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Col md={3}>
                      <Rating name="read-only" value={5} readOnly />
                    </Col>
                    <Col md={3}>
                      <Typography>49 Reviews</Typography>{" "}
                    </Col>
                  </Row>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Col>

        <Col>
          <Paper elevation={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={resortPhoto}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Holiday Inn Resort Bali Benoa
                  </Typography>
                  <Row
                    style={{
                      alignItems: "center",
                      height: "4vh",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Col
                      md={{ span: 3 }}
                      className="border rounded"
                      style={{ marginLeft: 10 }}
                    >
                      1 ROOM
                    </Col>
                    <Col md={{ span: 3, offset: 5 }}>
                      <Typography variant="body1" align="right">
                        Rs. 4200/Night
                      </Typography>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      alignItems: "center",
                      height: "4vh",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Col md={3}>
                      <Rating name="read-only" value={5} readOnly />
                    </Col>
                    <Col md={3}>
                      <Typography>49 Reviews</Typography>{" "}
                    </Col>
                  </Row>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Col>
        <Col>
          <Paper elevation={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={resortPhoto}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Holiday Inn Resort Bali Benoa
                  </Typography>
                  <Row
                    style={{
                      alignItems: "center",
                      height: "4vh",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Col
                      md={{ span: 3 }}
                      className="border rounded"
                      style={{ marginLeft: 10 }}
                    >
                      1 ROOM
                    </Col>
                    <Col md={{ span: 3, offset: 5 }}>
                      <Typography variant="body1" align="right">
                        Rs. 4200/Night
                      </Typography>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      alignItems: "center",
                      height: "4vh",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Col md={3}>
                      <Rating name="read-only" value={5} readOnly />
                    </Col>
                    <Col md={3}>
                      <Typography>49 Reviews</Typography>{" "}
                    </Col>
                  </Row>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Col>
      </Row>

      {/* Most Viewed */}
      <Row className="px-5 pt-5">
        <Col md={2}>
          <h4>Most Viewed</h4>{" "}
        </Col>
        <Col md={{ span: 2, offset: 8 }}>
          <Row>
            <h3>See All</h3>
          </Row>
        </Col>
      </Row>
      <Row className="px-5 mb-5">
        <Col>
          <Paper elevation={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={resortPhoto}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Holiday Inn Resort Bali Benoa
                  </Typography>
                  <Row
                    style={{
                      alignItems: "center",
                      height: "4vh",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Col
                      md={{ span: 3 }}
                      className="border rounded"
                      style={{ marginLeft: 10 }}
                    >
                      1 ROOM
                    </Col>
                    <Col md={{ span: 3, offset: 5 }}>
                      <Typography variant="body1" align="right">
                        Rs. 4200/Night
                      </Typography>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      alignItems: "center",
                      height: "4vh",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Col md={3}>
                      <Rating name="read-only" value={5} readOnly />
                    </Col>
                    <Col md={3}>
                      <Typography>49 Reviews</Typography>{" "}
                    </Col>
                  </Row>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Col>
        <Col>
          <Paper elevation={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={resortPhoto}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Holiday Inn Resort Bali Benoa
                  </Typography>
                  <Row
                    style={{
                      alignItems: "center",
                      height: "4vh",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Col
                      md={{ span: 3 }}
                      className="border rounded"
                      style={{ marginLeft: 10 }}
                    >
                      1 ROOM
                    </Col>
                    <Col md={{ span: 3, offset: 5 }}>
                      <Typography variant="body1" align="right">
                        Rs. 4200/Night
                      </Typography>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      alignItems: "center",
                      height: "4vh",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Col md={3}>
                      <Rating name="read-only" value={5} readOnly />
                    </Col>
                    <Col md={3}>
                      <Typography>49 Reviews</Typography>{" "}
                    </Col>
                  </Row>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Col>
        <Col>
          <Paper elevation={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={resortPhoto}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Holiday Inn Resort Bali Benoa
                  </Typography>
                  <Row
                    style={{
                      alignItems: "center",
                      height: "4vh",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Col
                      md={{ span: 3 }}
                      className="border rounded"
                      style={{ marginLeft: 10 }}
                    >
                      1 ROOM
                    </Col>
                    <Col md={{ span: 3, offset: 5 }}>
                      <Typography variant="body1" align="right">
                        Rs. 4200/Night
                      </Typography>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      alignItems: "center",
                      height: "4vh",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Col md={3}>
                      <Rating name="read-only" value={5} readOnly />
                    </Col>
                    <Col md={3}>
                      <Typography>49 Reviews</Typography>{" "}
                    </Col>
                  </Row>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Col>
      </Row>

      {/* Testimonials */}
      <Row
        className="mb-3"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ff6666",
        }}
      >
        <Col md={4}>
          <h1 style={{ color: "white" }}>Testimonials</h1>
        </Col>
        <Col md={8} className="p-2">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
          >
            <div>
              <img src={testimonial1} />
              <div className="myCarousel">
                <h3>Shirley Fultz</h3>
                <h4>Designer</h4>
                <p>
                  It's freeing to be able to catch up on customized news and not
                  be distracted by a social media
                </p>
              </div>
            </div>

            <div>
              <img src={testimonial2} />
              <div className="myCarousel">
                <h3>Daniel Keystone</h3>
                <h4>Designer</h4>
                <p>
                  The simple and intuitive design makes it easy for me use. I
                  highly recommend Fetch to my peers.
                </p>
              </div>
            </div>

            <div>
              <img src={testimonial3} />
              <div className="myCarousel">
                <h3>Theo Sorel</h3>
                <h4>Designer</h4>
                <p>
                  I enjoy catching up with Fetch on my laptop, or on my phone
                  when I'm on the go!
                </p>
              </div>
            </div>
          </Carousel>
        </Col>
      </Row>
    </>
  );
}

export default HomeScreen;
