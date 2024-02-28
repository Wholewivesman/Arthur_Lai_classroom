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
import Tests from "./Exam";
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
  const searchParams = useSearchParams();
  return (
    <Container className="bg-dark h-100 border-5 rounded py-2">
      <Block blockNo={searchParams.get("blockNo")} />
    </Container>
  );
};
