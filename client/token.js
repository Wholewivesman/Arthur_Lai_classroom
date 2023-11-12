const AUTH_TOKEN_NAME = "auth_token";

export function getTokenLocal() {
  return localStorage.getItem(AUTH_TOKEN_NAME);
}

/**
 * @param {string} token
 */
export function setTokenLocal(token) {
  return localStorage.setItem(AUTH_TOKEN_NAME, token);
}

export async function verify() {
  let success = false;
  const token = getTokenLocal();
  await fetch("/api/auth/auth", {
    method: "POST",
    body: JSON.stringify({ token }),
  })
    .then((res) => {
      if (res.status === 200) return res.json();
    })
    .then((data) => {
      success = data.success;
    });
  return success;
}
