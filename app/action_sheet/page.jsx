"use client";

import { Container, Button } from "react-bootstrap";

export default () => {
  return (
    <Container className="mt-5 d-flex justify-content-evenly">
      <Button
        variant="light"
        className="mx-3 flex-grow-1 p-0 rounded border-0"
        href="/"
      >
        <img
          src="/res/img/teaching_materials_icon.jpg"
          className="w-100 rounded-top"
        />
        <span className="fs-2 fw-bold">教材</span>
      </Button>
      <Button
        variant="light"
        className="mx-3 flex-grow-1 p-0 rounded border-0"
        href="/"
      >
        <img src="/res/img/homeworks_icon.jpg" className="w-100 rounded-top" />
        <span className="fs-2 fw-bold">作業</span>
      </Button>
      <Button
        variant="light"
        className="mx-3 flex-grow-1 p-0 rounded border-0"
        href="/"
      >
        <img src="/res/img/test_icon.jpg" className="w-100 rounded-top" />
        <span className="fs-2 fw-bold">測驗</span>
      </Button>
    </Container>
  );
};
