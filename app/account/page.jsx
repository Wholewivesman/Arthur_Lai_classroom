"use client";

import { Container, Row, Col, Placeholder, Image } from "react-bootstrap";

export default () => {
  return (
    <div>
      <Container className="border mt-4 p-3 rounded" style={{ width: "700px" }}>
        <h1>個人資訊</h1>
        <hr />
        <Row>
          <Col className="m-0">
            <Placeholder
              as={Image}
              style={{ width: "200px", height: "200px" }}
            />
          </Col>
          <Col>
              <span className="m-2">姓名:</span>
              <span>name</span>
              <br />
              <br />
              <span className="m-2">座號:</span>
              <span>number</span>
              <br />
              <br />
              <span className="m-2">班級:</span>
              <span>number</span>
              <br />
              <br />
              <span className="m-2">財富值:</span>
              <span>number</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
