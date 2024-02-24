"use client";

import MainNavbar from "./components/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
