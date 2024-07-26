import { NextApiRequest, NextApiResponse } from "next";
import { getCookie } from "./cookies";
import { ExtendedNextApiRequest } from "../types";

export const authenticate =
  (handler: any) => (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    const token = getCookie(req, "token");

    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    // Thêm logic xác thực token nếu cần thiết
    // Ví dụ: kiểm tra token trong cơ sở dữ liệu hoặc xác minh chữ ký của JWT

    req.user = { username: "user" }; // Thêm thông tin người dùng vào request nếu cần

    return handler(req, res);
  };
