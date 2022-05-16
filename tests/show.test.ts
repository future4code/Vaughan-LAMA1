
import { ShowBusiness } from "../src/business/ShowBusiness";
import { ShowController } from "../src/controller/ShowController";
import { ShowInputDTO, WeekDay } from "../src/model/Show";
import { HashGeneratorMock } from "./mocks/hashGeneratorMock";
import { IdGeneratorMock } from "./mocks/idGeneratorMock";
import { ShowDatabaseMock } from "./mocks/showDatabaseMock";
import { TokenGeneratorMock } from "./mocks/tokenGeneratorMock";

const showBusinessMock = new ShowBusiness(
    new ShowDatabaseMock() as any,
    new IdGeneratorMock(),
    new TokenGeneratorMock(),
    new HashGeneratorMock()
)
const showControllerMock = new ShowController(
)
export const validarshow = (show: ShowInputDTO): boolean => {      
    
    if (!show.week_day === undefined || show.start_time === undefined || show.band_id === undefined || show.end_time === undefined) {
        return false
    }
    if (show.start_time === undefined || show.start_time < 8 || show.end_time > 23 ) {
        return false
    }
   
    return true
};
describe( "Testando o cadastro do show com data já agendada", () => {
   
    // test("com erro", async () => {

    // expect.assertions

    // try {
       
    //     }
    // } catch (error: any) {
    //   expect(error.statusCode).toBe(422)
    //   expect(error.message).toBe("Dia ou Horário já utilizado")
    // }
    
    // })
   
});

describe("Testando o cadastro do show sem erro", () => {
   
    test("funcionando", async () => {

        expect.assertions
        
            const novaBanda = validarshow({
                week_day: WeekDay.SEXTA,
                start_time: 0,
                end_time: 24,
                band_id: "5556656"
            });
            expect(novaBanda).toBe(false);
        
    })
});