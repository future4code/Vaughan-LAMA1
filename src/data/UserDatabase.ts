
import { User } from "../model/User";
import {BaseDatabase} from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "User_Lama";

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await BaseDatabase.connection()
        .insert({
          id,
          email,
          name,
          password,
          role
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    const result = await BaseDatabase.connection() 
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return User.toUserModel(result[0]);
  }

}