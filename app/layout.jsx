"use client";

import MainNavbar from "./components/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>聖哲老師的學習網站</title>
      </head>
      <body className="mb-5">
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
