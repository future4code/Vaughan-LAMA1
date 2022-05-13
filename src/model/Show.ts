
export interface ShowInputDTO {

    week_day: WeekDay,
    start_time: number,
    end_time: number,
    band_id: string


}

export enum WeekDay {
    SEXTA = "SEXTA",
    SABADO = "SABADO",
    DOMINGO = "DOMINGO"
}


export class Show {
    constructor(

        private id: string,
        private week_day: string,
        private start_time: number,
        private end_time: number,
        private band_id: string

    ) { }
    getId() {
        return this.id
    }

    getWeekDay() {
        return this.week_day
    }
    getStartTime() {
        return this.start_time
    }

    getEndTime() {
        return this.end_time
    }
    getBandId() {
        return this.band_id
    }
    static toShowModel(data: any): Show {
        return new Show(data.id, data.week_day, data.start_time, data.end_time, data.band_id);
    };
}
