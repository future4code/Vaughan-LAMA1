import {BaseDatabase} from "../../data/BaseDatabase";
import { User } from "../../model/User";

export class UserDatabaseMock{
    public async getUserById(id: string): Promise<void> {}
}