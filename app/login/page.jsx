"use client";

import { Button, Card, Container, Form } from "react-bootstrap";
import { useState } from "react";

function StudentForm() {
  const [hasError, setHasError] = useState(false);

  async function handleStudentSubmit(event) {
    event.preventDefault();

    const { id, password } = event.target;
    fetch("/api/auth/login/student", {
      method: "POST",
      body: JSON.stringify({
        id: id.value,
        password: password.value,
      }),
    })
      .then((res) => {
        switch (res.status) {
          case 200:
            window.location.href = "/";
            break;
          case 401:
            setHasError(true);
            break;
          default:
            break;
        }
        return res.json();
      })
      .catch((err) => console.error(err));
  }
  return (
    <Card className="w-100">
      <Card.Header className="text-center">
        <h1>學生登入</h1>
      </Card.Header>
      <Card.Body>
        <Container>
          <Form onSubmit={(event) => handleStudentSubmit(event, setHasError)}>
            <Form.Label htmlFor="id-input">學號:</Form.Label>
            <Form.Control
              id="id-input"
              type="text"
              name="id"
              required
            ></Form.Control>
            <Form.Label htmlFor="password-input">密碼:</Form.Label>
            <Form.Control
              id="password-input"
              type="password"
              name="password"
              required
            ></Form.Control>
            {hasError && (
              <Form.Text className="text-light bg-danger">
                學號或密碼錯誤
              </Form.Text>
            )}
            <Button
              className="mx-auto p-2 my-2 w-100"
              color="primary"
              type="submit"
            >
              登入
            </Button>
          </Form>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default () => {
  return (
    <>
      <div className="mt-5 mx-auto" style={{ width: "540px" }}>
        <StudentForm />
      </div>
    </>
  );
};
