import { ToggleButtonGroup, ToggleButton, Container, Button } from "react-bootstrap";
import { useState } from "react";
import MainNavbar from "../components/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default () => {
  const tools = [
    { name: "教材", value: "1" },
    { name: "作業", value: "2" },
    { name: "測驗", value: "3" },
  ];
  const [toolValue, setToolValue] = useState("1");
  return (
    <div>
      <MainNavbar />
      <div className="px-1 pt-4 d-flex" style={{ minHeight: "75vh" }}>
        <Container className="mx-3 col-1 p-2 border-5 rounded" style={{backgroundColor: "lightskyblue"}}>
          <ToggleButtonGroup className="w-100 mb-auto" name="tool" vertical>
            {tools.map((tool) => (
              <Button
                key={`tool-${tool.value}`}
                id={`tool-${tool.value}`}
                variant="primary"
                value={tool.value}
                active={toolValue === tool.value}
                onClick={(e) => setToolValue(e.currentTarget.value)}
              >
                {tool.name}
              </Button>
            ))}
          </ToggleButtonGroup>
        </Container>
        <div className="col-11"></div>
      </div>
    </div>
  );
};
