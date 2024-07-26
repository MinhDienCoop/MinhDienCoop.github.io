import { NextApiResponse } from "next";

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: string,
  options: { [key: string]: any } = {}
) => {
  const stringValue =
    typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

  if (options.maxAge) {
    options.expires = new Date(Date.now() + options.maxAge * 1000);
  }

  const cookieOptions = {
    ...options,
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    path: "/",
  };

  const serializedCookie = `${name}=${stringValue}; ${Object.entries(
    cookieOptions
  )
    .map(([key, val]) => {
      if (key === "maxAge") {
        return `Max-Age=${val}`;
      } else if (key === "expires") {
        return `Expires=${(val as unknown as Date).toUTCString()}`;
      }
      return `${key}=${val}`;
    })
    .join("; ")}`;

  res.setHeader("Set-Cookie", serializedCookie);
};

export const getCookie = (
  req: { headers: { cookie?: string } },
  name: string
) => {
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split(";").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=").map((v) => v.trim());
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {} as { [key: string]: string });

  return cookies[name] || null;
};
