// /* eslint-disable @typescript-eslint/no-explicit-any */
import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import IUser from "../interfaces/IUser";

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

async function encryptJWT(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(Date.now())
    .setExpirationTime("1day")
    .sign(key);
}

async function decryptJWT(jwt: string) {
  const { payload } = await jwtVerify(jwt, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function createSession(user: IUser) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encryptJWT({ user, expires });

  const cookiesObj = await cookies();

  // set name, value (session value, everything needed to login), partial response cookie obj
  cookiesObj.set(cookie.name, session, cookie);
  console.log("making a cookie: ");
  console.log(await cookiesObj.get(cookie.name));
  //   redirect("/");
  return null;
}

export async function verifySession() {
  const cookiesObj = await cookies();
  const session = await cookiesObj.get(cookie.name);
  console.log("session: ");
  console.log(session);
  
  if (!session) {
    return null;
  }

  const jwt: string = session?.value;
  const data = await decryptJWT(jwt);
  return data;
}

export async function updateSession() {}

export async function deleteSession() {
  const cookiesObj = await cookies();
  cookiesObj.delete(cookie.name);
}
