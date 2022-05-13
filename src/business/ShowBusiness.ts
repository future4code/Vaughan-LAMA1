import { ShowDatabase } from "../data/ShowDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { ShowInputDTO } from "../model/Show";
import { showRouter } from "../routes/showRouter";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private tokenGenerator: TokenGenerator,
        private hashGenerator: HashManager

    ) { }



    public async createShow(show: ShowInputDTO) {

        const arrayDias = ["SEXTA", "SABADO", "DOMINGO"]

        if (!arrayDias.includes(show.week_day)) {
            throw new Error("Necessita inserir o dia entre sexta e domingo");
        }

        if (show.start_time < 8 || show.start_time > 23) {
            throw new Error("Horário indisponível");
        }
        if (!show.start_time) {
            throw new Error("Precisa de um horário");
        }
        if (!show.band_id) {
            throw new Error("Id da banda inválido");
        }
        if (!show.end_time) {
            throw new Error("Horário indisponível");
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const authenticator = new Authenticator();
        const tokenData = authenticator.generateToken({ id });

        const showDatabase = new ShowDatabase();
        const newshow = showDatabase.findByDayAndHours(show.week_day, show.start_time);
        if ( (await newshow).length > 0) {
                throw new Error("Dia ou Horário já utilizado")
            }
       

        await showDatabase.createShow(id, show.week_day, show.start_time, show.end_time, show.band_id)
        

        return tokenData;
    }
}
