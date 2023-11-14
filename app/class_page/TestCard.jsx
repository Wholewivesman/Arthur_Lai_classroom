"use client";

import { Card, Placeholder, PlaceholderButton } from "react-bootstrap";

export default () => {
  return (
    <Card className="mt-4 mx-auto" style={{ width: "250px", height: "250px" }}>
      <Placeholder bg="danger" as={Card.Header} />
      <Card.Body className="d-flex flex-column">
        <Placeholder
          className="col-7 mb-1"
          bg="dark"
          as="span"
          style={{ height: "14px" }}
        />
        <PlaceholderButton className="mt-auto" />
      </Card.Body>
    </Card>
  );
};
