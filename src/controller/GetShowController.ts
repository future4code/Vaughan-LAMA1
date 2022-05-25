
import { Request, Response } from 'express';
import { GetShowBusiness } from '../business/GetShowBusiness';

const getshowBusiness = new GetShowBusiness()
export class GetShowController {
    getShow = async (req: Request, res: Response) => {


        try {

            const dia = req.query.dia as string


            const show = await getshowBusiness.getShow(dia);
            
            res.status(200).send({ show: show });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}