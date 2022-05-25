
import { ShowDatabase } from "../data/ShowDatabase";


const showDB = new ShowDatabase();


export class GetShowBusiness {
    getShow = async (show: string) => {
        try {

            const getshow = await  showDB.getShow(show)
            
           
            if (getshow === undefined) {
                throw new Error("Data inválida")
            }
            return getshow


        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}