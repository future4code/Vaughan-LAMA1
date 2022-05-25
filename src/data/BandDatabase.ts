
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {

  private static TABLE_NAME = "Banda_Lama";

  public async createBand(
    id: string,
    name: string,
    music_genre: string,
    responsible: string,

  ): Promise<void> {
    try {
      await BaseDatabase.connection()
        .insert({
          id,
          name,
          music_genre,
          responsible
        })
        .into(BandDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandByEmail(email: string): Promise<Band> {
    const result = await BaseDatabase.connection()
      .select("*")
      .from(BandDatabase.TABLE_NAME)
      .where({ email });

    return Band.toUserModel(result[0]);
  }

  getBand = async (
    id: string
  ) => {
    const post = await BaseDatabase.connection('Banda_Lama').select(
      "id",
      "name",
      "music_genre",
      "responsible"
    ).where({ id })
    return post[0]
  }

}