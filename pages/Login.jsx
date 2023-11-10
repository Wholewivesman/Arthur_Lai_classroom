import { Form } from "react-bootstrap";

async function handleStudentSubmit(event) {
  event.preventDefault();

  await fetch("/api/student", {
    method: "POST",
    body: JSON.stringify({
      id,
      password,
    }),
  }).then((res) => console.log(res));
}

function StudentForm() {
  <Form onSubmit={handleStudentSubmit}>
    <Form.Label>學號:</Form.Label>
    <Form.Control id="id-input" type="text"></Form.Control>
    <Form.Label>密碼:</Form.Label>
    <Form.Control id="password-input" type="text"></Form.Control>
  </Form>
}

export default () => {
  return <StudentForm></StudentForm>;
};
