import { Button, Card, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

async function handleStudentSubmit(event) {
  event.preventDefault();
  const id = document.getElementById("id-input").value;
  const password = document.getElementById("password-input").value;

  await fetch("/api/login/student", {
    method: "POST",
    body: JSON.stringify({
      id,
      password,
    }),
  }).then((res) => console.log(res));
}

function StudentForm() {
  return (
    <Card className="w-100">
      <Card.Header className="text-center">
        <h1>學生登入</h1>
      </Card.Header>
      <Card.Body>
        <Container>
          <Form onSubmit={handleStudentSubmit}>
            <Form.Label>學號:</Form.Label>
            <Form.Control id="id-input" type="text"></Form.Control>
            <Form.Label>密碼:</Form.Label>
            <Form.Control id="password-input" type="text"></Form.Control>
            <Button className="mx-auto p-2 my-2 w-100" color="primary" type="submit">登入</Button>
          </Form>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default () => {
  return (
    <div className="mt-5 mx-auto" style={{width: "540px"}}>
      <StudentForm />
    </div>
  );
};
