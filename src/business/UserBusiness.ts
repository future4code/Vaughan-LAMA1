import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { TokenGenerator } from "../services/TokenGenerator";

export class UserBusiness {

    constructor(
        private userDatabase: UserDatabase,
        private idGenerator:IdGenerator,
        private tokenGenerator: TokenGenerator,
        private hashGenerator: HashManager
  
     ){}

    public async createUser(user: UserInputDTO) {

        // if (!name) {
        //     throw new Error("Preencha o campo 'name'");
        // }
        // if (!email) {
        //     throw new Error("Preencha o campo 'email'");
        // }
        // if (!password) {
        //     throw new Error("Preencha o campo 'password'");
        // }
        // if (!role) {
        //     throw new Error("Preencha o campo 'role'");
        // }

        if (user.password.length < 6) {
            throw new Error("A senha deve conter no minimo 6 caracteres")
        }
        if (user.email.indexOf("@") === -1) {
            throw new Error("Email invalido");
        }



        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(user.password);

        const userDatabase = new UserDatabase();
        await userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id, role: user.role });

        return accessToken;
    }

    public async getUserByEmail(user: LoginInputDTO) {

        const userDatabase = new UserDatabase();
        const userFromDB = await userDatabase.getUserByEmail(user.email);

        const hashManager = new HashManager();
        const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }
}
export default UserBusiness;