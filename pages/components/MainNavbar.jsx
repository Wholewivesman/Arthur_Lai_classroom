import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

export default () => {
  return (
    <Navbar expand="lg" className="navbar navbar-light" style={{backgroundColor:"#e3f2fd"}}>
      <Container>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
