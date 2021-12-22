import React from "react";
import { Col, Container, Image, Navbar, Row } from "react-bootstrap";
import SearchBar from "material-ui-search-bar";
import logo from "../assets/hhlogo.png";
import { Link } from "react-router-dom";
import "../assets/css/main.css";

const NavbarHH = (props) => {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    // <Row>
    //   <Navbar>
    //     <Container>
    //       <Navbar.Brand>
    //         <Link to="/">
    //           <Image src={logo} height="100" />
    //         </Link>
    //       </Navbar.Brand>
    //       <Col md={{ span: 4, offset: 1 }}>
    //         <SearchBar
    //           value={searchValue}
    //           onChange={(newValue) => setSearchValue(searchValue)}
    //           onRequestSearch={() => {}}
    //         />
    //       </Col>
    //       <Navbar.Toggle />
    //       <Navbar.Collapse className="justify-content-end">
    //         <Navbar.Text className="p-5 h5" style={{ color: "#ff6666" }}>
    //           Become a Host
    //         </Navbar.Text>
    //         <Navbar.Text className="p-5 h5" style={{ color: "#ff6666" }}>
    //           Signup
    //         </Navbar.Text>
    //         <Navbar.Text className="p-5 h5" style={{ color: "#ff6666" }}>
    //           Login
    //         </Navbar.Text>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </Row>
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
              <Navbar.Text className="p-5 h5" style={{ color: "#ff6666" }}>
                Host Dashboard
              </Navbar.Text>
            </Link>
            <Link to="/user/me" style={{ textDecoration: "none" }}>
              <Navbar.Text className="p-5 h5" style={{ color: "#ff6666" }}>
                Traveller Dashboard
              </Navbar.Text>
            </Link>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <Navbar.Text className="p-5 h5" style={{ color: "#ff6666" }}>
                Logout
              </Navbar.Text>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavbarHH;
