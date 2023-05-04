import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import * as majji from "react-bootstrap";
//import { RiLoginCircleFill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
//import { Link, useNavigate } from "react-router-dom";
import { buttonColor } from "./style";
//const Home = lazy(() => import("./public/m.png"))

export default function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        sticky="top"
        variant="light"
        className="shadow"
      >
        <Container>

          <Navbar.Brand className="mr-auto" href="/">
            <img src="gOneLogo.png" width="130px" alt="G-One" />
          </Navbar.Brand>
          {/* <div>
            <span
              style={{ color: "#02044d", fontWeight: "bold", fontSize: "22px" }}
            >
              Sample Headding
            </span>
            <br />
            <span style={{ color: "#02044d", fontSize: "15px" }}>
              Sample Description ...
            </span>
          </div> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mx-auto">
              <majji.Nav.Link href="/"> Home</majji.Nav.Link>
              <majji.Nav.Link href="/services"> Services</majji.Nav.Link>
              <majji.Nav.Link href="/"> About-Us</majji.Nav.Link>
              <majji.Nav.Link href="/contactus"> Contact-Us</majji.Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <a href="/login">
                <button
                  type="button"
                  className="btn "
                  style={
                    buttonColor
                  }
                >
                  <FaLocationArrow /> LogIn{" "}
                </button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
