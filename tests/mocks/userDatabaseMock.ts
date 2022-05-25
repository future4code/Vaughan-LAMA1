import {BaseDatabase} from "../../src/data/BaseDatabase";
import { User } from "../../src/model/User";

export class UserDatabaseMock{
    public async getUserById(id: string): Promise<void> {}
}