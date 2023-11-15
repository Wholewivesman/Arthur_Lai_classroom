"use client";

import {
  ToggleButtonGroup,
  ToggleButton,
  Container,
  Button,
} from "react-bootstrap";
import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Homeworks from "./Homeworks";
import Resources from "./Resources";
import Tests from "./Tests";
import MainNavbar from "@/components/MainNavbar";
import Link from "next/link";

/**
 * @component
 * @param {object} props
 * @param {string} props.blockNo
 * @returns
 */
function Block({ blockNo }) {
  switch (blockNo) {
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
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const blocks = [
    { name: "教材", value: "1" },
    { name: "作業", value: "2" },
    { name: "測驗", value: "3" },
  ];

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div>
      <MainNavbar />
      <div className="px-1 pt-4 d-flex" style={{ minHeight: "75vh" }}>
        <div className="col-1">
          <Container
            className="mx-3 p-2 border-5 rounded h-100"
            style={{ backgroundColor: "lightskyblue" }}
          >
            <ToggleButtonGroup className="w-100 mb-auto" name="blocks" vertical>
              {blocks.map((block) => (
                <Button
                  as={Link}
                  key={`block-${block.value}`}
                  id={`block-${block.value}`}
                  variant="primary"
                  value={block.value}
                  active={block.value === searchParams.get("blockNo")}
                  href={pathName + "?" + createQueryString("blockNo", block.value)}
                >
                  {block.name}
                </Button>
              ))}
            </ToggleButtonGroup>
          </Container>
        </div>
        <div className="col-11 px-5">
          <Container className="bg-dark h-100 border-5 rounded">
            <Block blockNo={searchParams.get("blockNo")} />
          </Container>
        </div>
      </div>
    </div>
  );
};
