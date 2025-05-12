// /* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecrypt, JWTPayload, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const key = new TextEncoder().encode(process.env.SECRET);

const cookie = {
  name: "todogachii-session",
  options: {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  },
  duration: 20 * 60 * 60 * 100,
};

export async function encryptJWT(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(Date.now())
    .setExpirationTime("1day")
    .sign(key);
}

export async function createSession(userId: number) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encryptJWT({ userId, expires });

  const cookiesObj = await cookies();

  // set name, value (session value, everything needed to login), partial response cookie obj
  cookiesObj.set(cookie.name, session, cookie);
  //   cookiesObj.set(cookie.name, session, { ...cookie.options, expires });
  redirect("/");
}

export async function verifySession() {
  const cookiesObj = await cookies();
  const session = await cookiesObj.get(cookie.name);
  if (!session) {
    return null;
  }
  
  const jwt: string = session?.value;
  const user = await jwtDecrypt(jwt, key);
  return user;
}

export async function updateSession() {}

export async function deleteSession() {
    const cookiesObj = await cookies();
    cookiesObj.delete(cookie.name);
}
