import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

// postgresql://practice_owner:ytr16GzIUdOX@ep-shrill-hall-a1jxdsyw.ap-southeast-1.aws.neon.tech/practice?sslmode=require
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNmE5MDhlMTItYWU1MS00N2MwLTk4YTgtNWIzZmM5MjM3MmEzIiwidGVuYW50X2lkIjoiMzkyMmIxYjViMjZjNTFmMDFhMjgxYWRmNTIzMTkzMGY1ZmQxMWQzMjhmZWRjZGMxMTYxNDc3NTUyM2Y0MjRjMSIsImludGVybmFsX3NlY3JldCI6IjNlODNkOWJjLTFkMDktNDUzMi05NDdjLWQ1YzdlNmNjOTMyNSJ9._dinokw4YMDx9oJME6c7DapX4EL_saNqc4JH_DP-tFw"
export default app;
