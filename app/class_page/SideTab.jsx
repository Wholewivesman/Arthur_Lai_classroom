"use client";

import { Container, ToggleButtonGroup, Button, Link } from "react-bootstrap";
import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";


export default function SideTab() {
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
  );
}
