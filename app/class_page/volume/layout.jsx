"use client";

import Head from "next/head";
import SideTab from "./SideTab";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          <div className="px-1 pt-4 d-flex" style={{ minHeight: "75vh" }}>
            <div className="col-1">
              <SideTab />
            </div>
            <div className="col-11 px-5">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
