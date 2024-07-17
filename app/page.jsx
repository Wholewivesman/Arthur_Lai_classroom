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
      <Card.Header className="text-center">
        <font face="UD Digi Kyokasho NK-B">最新公告</font>
      </Card.Header>
    </Card>
  );
}

function Rules() {
  return (
    <Card style={{ width: "40%" }}>
      <Card.Header className="text-center">
        <font face="UD Digi Kyokasho NK-B">課堂規範</font>
      </Card.Header>
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
    <div className="bg-dark">
      <Carousel>
        <Carousel.Item>
          <Image
            className="mx-auto"
            src="./res/img/class_group_photo.jpg"
            style={{ display: "block" }}
            height={400}
          />
          <Carousel.Caption>
            <h3>班級合照</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="mx-auto"
            src="./res/img/teaching_demo.jpg"
            style={{ display: "block" }}
            height={400}
          />
          <Carousel.Caption>
            <h3>教學演示</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="mx-auto"
            src="./res/img/baseball_champion.jpg"
            style={{ display: "block" }}
            height={400}
          />
          <Carousel.Caption>
            <h3>樂樂棒球冠軍</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
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
