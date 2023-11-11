import {
  Container,
  ListGroup,
  ListGroupItem,
  Card,
  Carousel,
  Placeholder,
  Image,
} from "react-bootstrap";
import { useEffect } from "react";
import MainNavbar from "./components/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Announcement() {
  return (
    <Card style={{ width: "40%" }}>
      <Card.Header className="text-center">最新公告</Card.Header>
    </Card>
  );
}

function Rules() {
  return (
    <Card style={{ width: "40%" }}>
      <Card.Header className="text-center">課堂規範</Card.Header>
      <Card.Body>
        <ListGroup style={{ border: "none" }}>
          <ListGroupItem>1. 不要睡覺</ListGroupItem>
          <ListGroupItem>2. 不要聊天</ListGroupItem>
          <ListGroupItem>3. 不會的要舉手發問</ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

function Gallery() {
  return (
    <Carousel>
      <Carousel.Item>
        <Placeholder
          className="bg-dark w-100"
          as={Image}
          text="First slide"
          style={{ height: "180px" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Placeholder
          className="bg-dark w-100"
          as={Image}
          text="Second slide"
          style={{ height: "180px" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Placeholder
          className="bg-dark w-100"
          as={Image}
          text="Third slide"
          style={{ height: "180px" }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default function HomePage() {
  let loggedIn;
  useEffect(() => {
    async function foo() {
      const userToken = localStorage.getItem("userToken");
      console.log(userToken);
      await fetch("/api/login/auth", {
        method: "POST",
        body: JSON.stringify({ userToken }),
      })
        .then((res) => res.json())
        .then((data) => {
          loggedIn = data.loggedIn;
        });
    };
    foo();
  }, [loggedIn]);
  return (
    <>
      <MainNavbar userToken={loggedIn} />
      <div className="w-100">
        <Gallery />
      </div>
      <Container className="mt-3">
        {/* 聖哲的官網 */}
        {/* <h1 className="text-center">聖哲老師的學習網站</h1> */}
        <Container className="d-flex justify-content-around mt-5">
          <Announcement />
          <Rules />
        </Container>
        {/* <Container className="d-flex justify-content-around mt-5">
          <Test1 />
          <Test1 />
        </Container> */}
      </Container>
    </>
  );
}
