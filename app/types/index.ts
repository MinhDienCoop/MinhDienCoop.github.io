import { NextApiRequest } from "next";

export interface ExtendedNextApiRequest extends NextApiRequest {
  user?: {
    username: string;
    // Thêm các thuộc tính khác nếu cần
  };
}
