"use client";

import SideTab from "./SideTab";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="px-1 pt-4 d-flex" style={{ minHeight: "75vh" }}>
        <div className="col-1">
          <SideTab />
        </div>
        <div className="col-11 px-5">{children}</div>
      </div>
    </>
  );
}
