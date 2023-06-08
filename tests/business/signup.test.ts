import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { SignupSchema } from "../../src/dtos/user/signup.dto"

// import { USER_ROLES } from "../../../src/types"


describe("Signup", () => {
    const useBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()


    )
    test("retornar token de signup da conta normal", async () => {
        const input = SignupSchema.parse({
            name: "Myllena",
            email: "my@email.com",
            password: "bananinha"
        })
        const response = await useBusiness.signup(input)
        expect(response).toEqual({
            message: "Cadastro realizado com sucesso", 
            token: "token-mock" })
    })
})