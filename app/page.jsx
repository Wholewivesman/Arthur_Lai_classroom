"use client";

import {
  Container,
  ListGroup,
  ListGroupItem,
  Card,
  Carousel,
  Placeholder,
  Image,
} from "react-bootstrap";

function Announcement() {
  return (
    <Card style={{ width: "40%" }}>
      <Card.Header className="text-center"><font face="UD Digi Kyokasho NK-B">最新公告</font></Card.Header>
    </Card>
  );
}

function Rules() {
  return (
    <Card style={{ width: "40%" }}>
      <Card.Header className="text-center"><font face="UD Digi Kyokasho NK-B">課堂規範</font></Card.Header>
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
          style={{ height: "300px" }}
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
          style={{ height: "300px" }}
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
          style={{ height: "300px" }}
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
  return (
    <>
      {/* <MainNavbar /> */}
      <div className="w-100">
        <Gallery />
      </div>
      <Container className="mt-3">
        <Container className="d-flex justify-content-around mt-5">
          <Announcement />
          <Rules />
        </Container>
      </Container>
    </>
  );
}
