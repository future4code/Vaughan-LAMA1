import express from "express";
import { GetShowController } from "../controller/GetShowController";
import { ShowController } from "../controller/ShowController";


export const showRouter = express.Router();

const showController = new ShowController();
const getshowController = new GetShowController();

showRouter.post("/signup", showController.create);
showRouter.get("/details", getshowController.getShow);