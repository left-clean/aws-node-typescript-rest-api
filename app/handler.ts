import { Handler } from "aws-lambda";
import dotenv from "dotenv";
import path from "path";
import { Response } from "./helpers/response";
const dotenvPath = path.join(
  __dirname,
  "../",
  `config/.env.${process.env.NODE_ENV}`
);
dotenv.config({
  path: dotenvPath,
});

export const hello: Handler = async () =>
  Response.success({ message: "hello" });
