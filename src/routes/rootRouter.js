import express from "express";
import { sendFcmMessage } from "../controller/sendFcmMessage";
import { concertsRouter } from "./concertsRouter";

export const rootRouter = express.Router();

rootRouter.use("/concerts", concertsRouter);
rootRouter.post("/fcm/send", sendFcmMessage);
