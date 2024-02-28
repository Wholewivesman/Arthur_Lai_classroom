"use client";

import { Col, Row, Container, Button } from "react-bootstrap";
import { usePathname, useSearchParams } from "next/navigation";
import VolumeCard from "./VolumeCard";

export default () => {
  const arr = Array.from(Array(10).keys());
  return (
    <Container
      className="bg-dark w-100 mt-3 border-5 rounded py-2"
      style={{ minHeight: "75vh" }}
    >
      <Row className="me-auto" xs={1} sm={1} md={2} lg={3} xl={4} xxl={4}>
        {arr.map((a, index) => (
          <Col key={`VolumeCard-Col-${index}`}>
            <VolumeCard />
          </Col>
        ))}
      </Row>
      );
    </Container>
  );
};
