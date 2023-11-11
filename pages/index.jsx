import {
  Form,
  Button,
  Container,
  ListGroup,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import Link from "next/link";
import MainNavbar from "./components/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Announcement() {
  return (
    <Card style={{ width: "40%" }}>
      <Card.Header className="text-center">公告</Card.Header>
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

export default function HomePage() {
  return (
    <>
      <MainNavbar />
      <Container className="mt-3">
        {/* 聖哲的官網 */}
        <h1 className="text-center">聖哲老師的班級網站</h1>
        <Container className="d-flex justify-content-around mt-5">
          <Announcement />
          <Rules />
        </Container>
      </Container>
    </>
  );
}
