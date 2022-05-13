import { Band } from "../model/Band";
import { Show } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {

    private static TABLE_NAME = "Show_Lama"
    private static TABLE_SHOWS_BAND = "Banda_Lama" 
    public async createShow(
         id: string,
         week_day: string,
         start_time: number,
         end_time: number,
         band_id: string
          ): Promise<void> {
            try {
              await BaseDatabase.connection()
                .insert({
                    id,
                    week_day,
                    start_time,
                    end_time,
                    band_id
                })
                .into(ShowDatabase.TABLE_NAME);
            } catch (error: any) {
              throw new Error(error.sqlMessage || error.message);
            }
          }

    public async findByDayAndHours(week_day: string, start_time: number): Promise<Show[]> {

        const shows = await BaseDatabase.connection(ShowDatabase.TABLE_NAME)
            .select('*')
            .where({ week_day: week_day, start_time: start_time })

        return shows.map((show) => Show.toShowModel(show));
    }
    public getShow = async (
      week_day: string
    ) => {
      const show = await BaseDatabase.connection('Show_Lama').select(
        "Banda_Lama.name", "Banda_Lama.music_genre"
      )
      .from(ShowDatabase.TABLE_NAME)
      .join(ShowDatabase.TABLE_SHOWS_BAND, "Banda_Lama.id", "Show_Lama.band_id" )
      .orderBy("Show_Lama.start_time")
      .where( "week_day", `${week_day}`)
     
      return show[0]
    }
  
    
}