import { Form, Button, Container } from "react-bootstrap";
import Link from "next/link";
import MainNavbar from "./components/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Announcement() {
  return <Container></Container>;
}

function Rules() {
  return <Container></Container>;
}

export default function HomePage() {
  return (
    <>
      <MainNavbar />
      <Container>
        {/* 聖哲的官網 */}
        <h1 className="text-center">聖哲老師的班級網站</h1>
        <Container className="d-flex flex-row">
          <Announcement />
          <Rules />
        </Container>
      </Container>
    </>
  );
}
