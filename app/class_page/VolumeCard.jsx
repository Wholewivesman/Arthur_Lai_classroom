"use client";

import { Button, Card, Image, Placeholder, PlaceholderButton } from "react-bootstrap";

export default () => {
  return (
    <Card className="my-2 mx-auto" style={{ width: "250px", height: "250px" }}>
      <Placeholder bg="danger" as={Card.Header} />
      <Card.Body className="d-flex flex-column">
        {/* <Placeholder
          className="col-7 mb-1"
          bg="dark"
          as="span"
          style={{ height: "14px" }}
        /> */}
        <span className="mb-4" style={{ height: "14px" }} bg="dark">第一冊</span>
        <Placeholder
          className="col-7 mb-1"
          bg="dark"
          as={Image}
          style={{ height: "100px", width: "100px" }}
        />
        {/* <PlaceholderButton className="mt-auto" /> */}
        <Button className="mt-auto" onClick={(e) => window.location.href="/class_page/volume?class_name=math&volume=1"}>進入</Button>
      </Card.Body>
    </Card>
  );
};
