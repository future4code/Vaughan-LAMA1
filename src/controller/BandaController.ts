import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import {BaseDatabase} from "../data/BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { TokenGenerator } from "../services/TokenGenerator";
import { BandInputDTO } from "../model/Band";
import { BandBusiness } from "../business/BandBusiness";

const bandBusiness = new BandBusiness(
    new UserDatabase(),
    new IdGenerator(),
    new TokenGenerator(),
    new HashManager(),
    
)
export class BandController {
    async signupBand(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const input: BandInputDTO = {
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible
            }


            const banda = await  bandBusiness.createBand(input ,token)
          
            res.status(200).send({message: "Banda cadastrada!", token: token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}