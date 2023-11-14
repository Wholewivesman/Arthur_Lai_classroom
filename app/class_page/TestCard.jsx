"use client";

import { Card, Placeholder, PlaceholderButton } from "react-bootstrap";

export default () => {
  return (<Card className="mt-4 mx-auto" style={{ width: "250px", height: "250px" }}>
    <Placeholder bg="danger" as={Card.Header} animation="wave" />
    <Card.Body className="d-flex flex-column">
      <Placeholder className="col-7 mb-1" bg="dark" as="span" animation="wave" style={{height: "14px"}} />
      <PlaceholderButton bg="dark" animation="wave" />
    </Card.Body>
  </Card>);
};
