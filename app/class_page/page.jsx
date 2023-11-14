"use client";

import {
  ToggleButtonGroup,
  ToggleButton,
  Container,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import Homeworks from "./Homeworks";
import Resources from "./Resources";
import Tests from "./Tests";
import MainNavbar from "@/components/MainNavbar";

/**
 *
 * @param {string} componentValue
 */
function ComponentBlock(componentValue) {
  switch (componentValue) {
    case "1":
      return <Resources />;
    case "2":
      return <Homeworks />;
    case "3":
      return <Tests />;
    default:
      break;
  }
  return <div />;
}

export default () => {
  const components = [
    { name: "教材", value: "1" },
    { name: "作業", value: "2" },
    { name: "測驗", value: "3" },
  ];
  const [componentValue, setcomponentValue] = useState("1");
  return (
    <div>
      <MainNavbar />
      <div className="px-1 pt-4 d-flex" style={{ minHeight: "75vh" }}>
        <div className="col-1">
          <Container
            className="mx-3 p-2 border-5 rounded h-100"
            style={{ backgroundColor: "lightskyblue" }}
          >
            <ToggleButtonGroup
              className="w-100 mb-auto"
              name="component"
              vertical
            >
              {components.map((component) => (
                <Button
                  key={`component-${component.value}`}
                  id={`component-${component.value}`}
                  variant="primary"
                  value={component.value}
                  active={componentValue === component.value}
                  onClick={(e) => setcomponentValue(e.currentTarget.value)}
                >
                  {component.name}
                </Button>
              ))}
            </ToggleButtonGroup>
          </Container>
        </div>
        <div className="col-11 px-5">
          <Container className="bg-dark h-100 border-5 rounded">
            <ComponentBlock componentValue={componentValue} />
          </Container>
        </div>
      </div>
    </div>
  );
};
