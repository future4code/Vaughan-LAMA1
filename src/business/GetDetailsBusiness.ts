import { BandDatabase } from "../data/BandDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


const bandDB = new BandDatabase();


export class GetBandBusiness {
    getBand = async (id: string) => {
        try {

            const band = await  bandDB.getBand(id)
            if (!band) {
                throw new Error("ID inválido")
            }
            return band


        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}