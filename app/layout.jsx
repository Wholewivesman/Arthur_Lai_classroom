"use client";

import { useEffect, useRef, useState } from "react";
import MainNavbar from "./components/MainNavbar";
import { UserContext } from "./contexts/UserContext";
import { User } from "./class/user";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  const [isAuthed, setIsAuthed] = useState(false);
  const [userProfile, setUserProfile] = useState();
  useEffect(() => {
    if (!isAuthed) {
      fetch("/api/auth")
        .then((res) => res.json())
        .then((data) => {
          setIsAuthed(true);
          if (data.success) {
            setUserProfile(data.decodedPayload);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [isAuthed, userProfile]);

  return (
    <html>
      <head>
        <title>聖哲老師的學習網站</title>
      </head>
      <body className="mb-5">
        {isAuthed && (
          <UserContext.Provider value={userProfile}>
            <MainNavbar />
            {children}
          </UserContext.Provider>
        )}
      </body>
    </html>
  );
}
