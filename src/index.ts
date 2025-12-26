import http from "http";
import "dotenv/config";
import { app } from "./configs/app.js";

const port = process.env.PORT || 3000;
const host = process.env.HOST_LOCAL_AREA || "localhost";

const server = http.createServer(app);

try {
  server.listen(Number(port), () => {
    console.log(`🚀 Server is running at http://${host}:${port}/api/v1/`);
  });
} catch (error: any) {
  console.error("❌ Server startup error:", error.message);
}
