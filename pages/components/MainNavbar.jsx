import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { verify } from "../client/token";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MainNavbar() {
  let authed = false;
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (!authed) {
      verify().then(success => setLoggedIn(success));
      authed = true;
    }
  }, [authed]);
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Container>
<<<<<<< HEAD
        <Navbar.Brand style={{fontSize:"40px"}} href="/"><b><font face="UD Digi Kyokasho NK-B">聖哲老師的學習網站</font></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav navbar-nav ms-auto">
            {/* <Nav className="me-auto"> */}
            {/* <NavDropdown style={{fontSize: "20px"}} title="課程" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">數學課</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">國語課</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">英文課</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">自然課</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link style={{fontSize:"20px"}} className="active" href="/Login"><b><font face="UD Digi Kyokasho NK-B">帳號登入</font></b></Nav.Link>
=======
        <Navbar.Brand style={{ fontSize: "40px" }} href="/">
          聖哲老師的學習網站
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav navbar-nav ms-auto">
            {loggedIn ? (
              <NavDropdown
                style={{ fontSize: "20px" }}
                title="課程"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">數學課</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">國語課</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">英文課</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">自然課</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                style={{ fontSize: "20px" }}
                className="active"
                href="/Login"
              >
                登入
              </Nav.Link>
            )}

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
>>>>>>> 5580b6116009d5102970904171180e4a4f62c469
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
