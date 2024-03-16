"use client";

import { useEffect, useRef, useState } from "react";
import MainNavbar from "./components/MainNavbar";
import { UserContext } from "./contexts/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  const authRef = useRef(false);
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    if (!authRef.current && Object.keys(userProfile).length === 0) {
      authRef.current = true;
      console.log("auth starting");
      fetch("/api/auth")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.success);
          if (data.success) setUserProfile(data.decodedPayload);
          else setUserProfile({});
        })
        .catch((err) => console.error(err));
      console.log("auth end");
    }
    return () => {
      authRef.current = true;
    };
  }, [userProfile]);

  return (
    <html>
      <head>
        <title>聖哲老師的學習網站</title>
      </head>
      <body className="mb-5" style={{ minHeight: "110vh" }}>
        {authRef.current && (
          <UserContext.Provider value={userProfile}>
            <MainNavbar />
            {children}
          </UserContext.Provider>
        )}
      </body>
    </html>
  );
}
