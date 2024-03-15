"use client";

import { Col, Row, Container } from "react-bootstrap";
import { useEffect } from "react";
import VolumeCard from "./VolumeCard";

export default () => {
  let no;
  useEffect(() => {
    fetch("/res/json/bookpdf.json").then((res) => {
      // if (res.ok) {
      //   let json = JSON.parse(res);
      //   no = Object.keys(json).length;
      //   console.log(no);
      // }
      // extract json from response
      if(res.status === 200) res.text().then(text => console.log(text));
      else console.log(res.status);
    });
  }, []);
  const volumes = Array.from(Array(10).keys());
  return (
    <Container
      className="bg-dark w-100 mt-3 border-5 rounded py-2"
      style={{ minHeight: "75vh" }}
    >
      <Row className="me-auto" xs={1} sm={1} md={2} lg={3} xl={4} xxl={4}>
        {volumes.map((a, index) => (
          <Col key={`VolumeCard-Col-${index}`}>
            <VolumeCard />
          </Col>
        ))}
      </Row>
      );
    </Container>
  );
};
