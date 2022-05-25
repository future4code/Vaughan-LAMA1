import * as jwt from "jsonwebtoken";
import { UserRole } from "../../src/model/User";
import { AuthenticationData } from "../../src/services/Authenticator";

export class TokenGeneratorMock {
    private static expiresIn: number = 1200;

    public generate = (input: AuthenticationData): string => {

      return "token_mockado";
    };

    public verify(token: string) {
      return {
          id: "id_mockado",
          role: UserRole.NORMAL
      }
    }
  }

  export default new TokenGeneratorMock()