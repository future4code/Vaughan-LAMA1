import bcrypt from "bcryptjs";

export class HashGeneratorMock {
   public hash = async (s: string): Promise<any> => {

      return "hash"
   }

   public compare = async (s: string, hash: string): Promise<boolean> => {
      return s === hash
   }
}

export default new HashGeneratorMock()