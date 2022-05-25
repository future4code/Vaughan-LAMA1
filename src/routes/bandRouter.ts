import express from "express";
import { BandController } from "../controller/BandController";
import { GetBandController } from "../controller/GetDetailsController";


export const bandRouter = express.Router();

const bandController = new BandController();
const bandController2 = new GetBandController();

bandRouter.post("/signup", bandController.signupBand);
bandRouter.get("/details/:id", bandController2.getBand);