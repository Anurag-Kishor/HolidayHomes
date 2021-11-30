import React from "react";
import { Col, Container, Image, Navbar, Row } from "react-bootstrap";
import SearchBar from "material-ui-search-bar";
import logo from "../assets/hhlogo.png";

const NavbarHH = (props) => {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <Row>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo} height="100" />
          </Navbar.Brand>
          <Col md={{ span: 4, offset: 1 }}>
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
  );
};

export default NavbarHH;
