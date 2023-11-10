//import { v4 } from "uuid";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import MainNavbar from "./components/MainNavBar";
import "bootstrap/dist/css/bootstrap.min.css";

async function handleSubmit(event) {
  event.preventDefault();
//   const name = document.getElementById("username-input").value;
//   if (typeof name !== "string" || name.length === 0) {
//     alert("Invalid name!");
//     return;
//   }

  await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      id,
      password,
    }),
  }).then((res) => console.log(res));
}

export default function HomePage() {
  return (
    <>
    <MainNavbar />
    </>
  );
}
