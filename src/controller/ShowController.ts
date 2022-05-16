import { Request, Response } from "express"
import { ShowInputDTO } from "../model/Show"
import { BaseError } from "../error/BaseError"
import { ShowBusiness } from "../business/ShowBusiness"
import { IdGenerator } from "../services/IdGenerator"
import {TokenGenerator} from "../services/TokenGenerator"
import { HashManager } from "../services/HashManager"
import { ShowDatabase } from "../data/ShowDatabase"


const showBusiness = new ShowBusiness(
 
        new ShowDatabase(),
        new IdGenerator(),
        new TokenGenerator(),
        new HashManager(),
        
)
export class ShowController {
    async create(req: Request, res: Response) {
        try {

            const input: ShowInputDTO = {
                week_day: req.body.week_day,
                start_time: req.body.start_time,
                end_time: req.body.end_time,
                band_id: req.body.band_id
            }
            
            const result = await showBusiness.createShow(input)
            res.send({ menssage: "Show Criado" })


        } catch (error) {
            const err = error as BaseError
            res.status(422).send({ error: err.message })

        }
    }
}