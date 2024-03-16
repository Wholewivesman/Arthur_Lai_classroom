"use client";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "app/contexts/UserContext";

function BeforeLoggedIn() {
  return (
    <Nav className="nav navbar-nav ms-auto">
      <Nav.Link style={{ fontSize: "20px" }} className="active" href="/login">
        <b>
          <font face="UD Digi Kyokasho NK-B">帳號登入</font>
        </b>
      </Nav.Link>
    </Nav>
  );
}

function AfterLoggedIn() {
  return (
    <Nav className="nav navbar-nav ms-auto">
      <NavDropdown
        align="end"
        style={{ fontSize: "20px" }}
        title="課程"
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="/class_page?classname=math">
          數學課
        </NavDropdown.Item>
        <NavDropdown.Item href="/class_page?classname=Mandarin">
          國語課
        </NavDropdown.Item>
        <NavDropdown.Item href="/class_page?classname=English">
          英文課
        </NavDropdown.Item>
        {/* <NavDropdown.Divider /> */}
        <NavDropdown.Item href="/class_page?classname=Science">
          自然課
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        align="end"
        style={{ fontSize: "20px" }}
        title="帳號"
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item style={{ fontSize: "20px" }} href="/account">
          個人資料
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          href="/"
          onClick={(e) => {
            fetch("/api/auth/logout", {
              method: "GET",
            });
          }}
        >
          登出
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default function MainNavbar() {
  const userProfile = useContext(UserContext);
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Container>
        <Navbar.Brand style={{ fontSize: "40px" }} href="/">
          <b>
            <font face="UD Digi Kyokasho NK-B">聖哲老師的學習網站</font>
          </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {Object.keys(userProfile).length === 0 ? (
            <BeforeLoggedIn />
          ) : (
            <AfterLoggedIn />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
