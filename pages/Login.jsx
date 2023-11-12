import { Button, Card, Container, Form } from "react-bootstrap";
import { useState, Dispatch, SetStateAction } from "react";
import { NextRouter, useRouter } from "next/router";
import MainNavbar from "../components/MainNavbar";
import { setTokenLocal } from "../client/token";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 *
 * @param {import("react").FormEvent} event
 * @param {Dispatch<SetStateAction<boolean>>} setHasError
 * @param {NextRouter} router
 */
async function handleStudentSubmit(event, setHasError, router) {
  event.preventDefault();
  const id = document.getElementById("id-input").value;
  const password = document.getElementById("password-input").value;

  let status;
  await fetch("/api/auth/login/student", {
    method: "POST",
    body: JSON.stringify({
      id,
      password,
    }),
  })
    .then((res) => {
      status = res.status;
      return res.json();
    })
    .then((data) => {
      switch (status) {
        case 200:
          setTokenLocal(data.token);
          router.push("/");
          break;
        case 401:
          setHasError(true);
          break;
        default:
          break;
      }
      console.log(data);
    });
}

function StudentForm() {
  const router = useRouter();
  const [hasError, setHasError] = useState(false);
  return (
    <Card className="w-100">
      <Card.Header className="text-center">
        <h1>學生登入</h1>
      </Card.Header>
      <Card.Body>
        <Container>
          <Form onSubmit={(event) => handleStudentSubmit(event, setHasError, router)}>
            <Form.Label>學號:</Form.Label>
            <Form.Control id="id-input" type="text"></Form.Control>
            <Form.Label>密碼:</Form.Label>
            <Form.Control id="password-input" type="password"></Form.Control>
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
      <MainNavbar />
      <div className="mt-5 mx-auto" style={{ width: "540px" }}>
        <StudentForm />
      </div>
    </>
  );
};
