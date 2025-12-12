import express from "express";
import { getConcert, getConcerts } from "../controller/concertsController";

export const concertsRouter = express.Router();

concertsRouter.get("/:id", getConcert);
concertsRouter.get("/", getConcerts);
