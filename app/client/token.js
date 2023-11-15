"use client";

export async function verify() {
  let success = false;
  success = await fetch("/api/auth", {
    method: "GET",
  }).then((res) => {
    if(res.ok) return res.json();
  }).then(data => data.success);
  return success;
}
