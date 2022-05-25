import { IdGenerator } from "../services/IdGenerator"
import { BandInputDTO } from "../model/Band"
import { HashManager } from "../services/HashManager";
import { BandDatabase } from "../data/BandDatabase";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { TokenGenerator } from "../services/TokenGenerator";


export class BandBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private tokenGenerator: TokenGenerator,
        private hashGenerator: HashManager

    ) { }

    async createBand(band: BandInputDTO, token: string) {

        
        if (!token) {
            throw new Error("Token invalido ou ausente");
            
        }
        if (!band.name) {
            throw new Error("Preencha o campo de nome da banda");
        }
        if (!band.music_genre) {
            throw new Error("Preencha o campo de genero da musica");
        }
        if (!band.responsible) {
            throw new Error("Preencha o campo de responsavel pela banda");
        }


        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const authenticator = new Authenticator();
        const tokenData = authenticator.getData(token);

        if (tokenData.role === "NORMAL") {
            throw new Error("Role invalido");
        }
        const bandDatabase = new BandDatabase();
        await bandDatabase.createBand(id, band.name, band.music_genre, band.responsible);


        return tokenData;
    }



}