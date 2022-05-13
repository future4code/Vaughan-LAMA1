import express from "express";
import { BandController } from "../controller/BandaController";


export const bandRouter = express.Router();

const bandController = new BandController();

bandRouter.post("/signup", bandController.signupBand);
bandRouter.get("/bands", bandController.signupBand);
bandRouter.get("/band-details:id", bandController.signupBand);