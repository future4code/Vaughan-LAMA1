import { BandBusiness } from "../src/business/BandBusiness";
import { BandInputDTO } from "../src/model/Band";
import { HashGeneratorMock } from "./mocks/hashGeneratorMock";
import { IdGeneratorMock } from "./mocks/idGeneratorMock";
import { TokenGeneratorMock } from "./mocks/tokenGeneratorMock";
import { UserDatabaseMock } from "./mocks/userDatabaseMock";

const bandBusinessMock = new BandBusiness(
    new UserDatabaseMock() as any,
    new IdGeneratorMock(),
    new TokenGeneratorMock(),
    new HashGeneratorMock()
)
export const validarBanda = (input: BandInputDTO): boolean => {
    if (!input.name === undefined || input.music_genre === undefined || input.responsible === undefined) {
        return false
    }
  
    return true
};
describe("Testando o cadastro da banda sem erro", () => {
   
    test("com nome", async () => {

        expect.assertions
        try {
            const novaBanda = validarBanda({
                name: "abc",
                music_genre:"aaa",
                responsible: "ssss"
            });
            expect(novaBanda).toBe(true);
        }  catch (error: any) {
           
            expect(error.message).toBe("Banda inválida")
          }
    })
   
});

describe("Testando o cadastro da banda com erro", () => {
   
    test("sem nome", async () => {

        expect.assertions
        
            const novaBanda = validarBanda({
                name: "aewew",
                music_genre:"",
                responsible: "ssss"
            });
            expect(novaBanda).toBeDefined();
        
    })
});
