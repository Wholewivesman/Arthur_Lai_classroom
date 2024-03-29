"use client";

import { Button, Card, Image, Placeholder } from "react-bootstrap";

export default () => {
  return (
    <Card className="my-2 mx-auto" style={{ width: "250px", height: "250px" }}>
      <Placeholder bg="danger" as={Card.Header} />
      <Card.Body className="d-flex flex-column">
        <span className="mb-4" style={{ height: "14px" }} bg="dark">第一冊</span>
        <Placeholder
          className="col-7 mb-1"
          bg="dark"
          as={Image}
          style={{ height: "100px", width: "100px" }}
        />
        <Button className="mt-auto" href="/action_sheet?volume=1">進入</Button>
      </Card.Body>
    </Card>
  );
};
