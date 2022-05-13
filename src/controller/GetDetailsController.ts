
import { Request, Response } from 'express';
import  {GetBandBusiness}  from '../business/GetDetailsBusiness';

const getbandBusiness = new GetBandBusiness()
export class GetBandController {
    getBand = async (req: Request, res: Response) => {


        try {

            const id = req.params.id


            const band = await getbandBusiness.getBand(id);

            res.status(200).send({ band });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}