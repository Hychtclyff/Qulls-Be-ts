import { Router } from "express";

export default (app: any) => {
  const router = Router();
  app.use("/api/v1", router);

  router.get("/", (req, res) => {
    const message = "Qulls APi Ready To Use";
    const data = {
      status: "Online",
      version: "1.0.0",
      timeServer:
        new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }) +
        " WIB",
    };

    return res.status(200).json({
      status: {
        code: 200,
        message,
      },
      data,
    });
  });
};
