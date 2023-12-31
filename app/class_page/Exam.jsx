"use client";

import { Col, Row } from "react-bootstrap";
import TestCard from "./ExamCard";

export default () => {
  const arr = Array.from(Array(10).keys())
  return (
    <Row className="me-auto" xs={1} sm={1} md={2} lg={3} xl={4} xxl={4}>
      {arr.map((a, index) => (
        <Col key={`TestCard-Col-${index}`}>
          <TestCard />
        </Col>
      ))}
    </Row>
  );
};
